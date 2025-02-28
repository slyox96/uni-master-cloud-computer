from rest_framework import viewsets, generics, filters
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.parsers import MultiPartParser, FormParser
from django.core.mail import send_mail
from django.http import JsonResponse
from .models import Product, Order, OrderItem, Category
from .serializers import ProductSerializer, OrderSerializer, OrderItemSerializer, CategorySerializer
import stripe

# ✅ Stripe API Key
stripe.api_key = "sk_test_51QxYAxFo0xvmS7fQboViXx3oIkJ6xZpVUVPvLU6aLHyUPRMTknv9u0GYYK2cOPr2E2tW10HXfmqu2shhS2a03SXj0048OTBYnj"

# ✅ Product List & Creation
class ProductListCreate(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    parser_classes = (MultiPartParser, FormParser)

# ✅ Product Search & Filter
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'description']

# ✅ Category View
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# ✅ Get Products by Category
class ProductListByCategory(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ['category__id']

    def get_queryset(self):
        queryset = super().get_queryset()
        category_id = self.request.query_params.get('category_id', None)
        if category_id:
            queryset = queryset.filter(category__id=category_id)
        return queryset

# ✅ Order Placement (Stock Update + Email Confirmation)
def place_order(request):
    try:
        data = request.POST
        user_email = request.user.email
        order_items = data.getlist("items[]")  # List of item IDs
        order_total = 0

        order = Order.objects.create(user=request.user, total_price=0)

        for item_id in order_items:
            product = Product.objects.get(id=item_id)
            if product.stock > 0:
                product.stock -= 1
                product.save()
                OrderItem.objects.create(order=order, product=product, price=product.price)
                order_total += product.price
            else:
                return JsonResponse({"error": f"Product {product.name} is out of stock!"}, status=400)

        # Update total price after adding all items
        order.total_price = order_total
        order.save()

        # Send Order Confirmation Email
        send_mail(
            subject="Order Confirmation",
            message=f"Your order #{order.id} has been placed successfully!",
            from_email="w6550872@gmail.com",
            recipient_list=["cloudc523@gmail.com"],
            fail_silently=False
        )

        return JsonResponse({"message": "Order placed successfully, email sent!"})

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

# ✅ Order ViewSet (Handles Creation & Listing)
class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def create(self, request, *args, **kwargs):
        data = request.data
        items = data.pop("items", [])
        order = Order.objects.create(**data)

        for item in items:
            OrderItem.objects.create(order=order, **item)

        return Response(OrderSerializer(order).data, status=status.HTTP_201_CREATED)

# ✅ OrderItem ViewSet
class OrderItemViewSet(viewsets.ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

# ✅ Payment Processing with Dynamic Amount
def process_payment(request):
    try:
        order_id = request.POST.get("order_id")
        order = Order.objects.get(id=order_id)

        if not order:
            return JsonResponse({"error": "Invalid order ID"}, status=400)

        charge = stripe.Charge.create(
            amount=int(order.total_price * 100),  # Convert to cents
            currency="usd",
            source=request.POST["token"],  # Mock card token
            description=f"Payment for order {order.id}"
        )

        order.payment_status = "Paid"
        order.save()

        return JsonResponse({"message": f"Payment for order {order.id} successful!"})

    except stripe.error.CardError as e:
        return JsonResponse({"error": f"Payment failed: {str(e)}"}, status=400)

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)