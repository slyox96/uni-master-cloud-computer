from rest_framework import viewsets
from .models import Product, Order, OrderItem
from .serializers import ProductSerializer, OrderSerializer, OrderItemSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from api.models import Category, PaymentMethod
from rest_framework import generics




class ProductListCreate(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderItemViewSet(viewsets.ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

@api_view(['POST'])
def create_product_order(request):
    try:
        # Creating a Product
        product = Product.objects.create(
            name="T-shirt",
            description="A nice cotton t-shirt",
            price=19.99,
            stock=100,
            category=Category.SHIRT,  # Ensure Category is defined properly
            image="tshirt.jpg"  # Ensure the image exists or handle it properly
        )

        # Creating an Order
        order = Order.objects.create(
            orderNumber="12345",
            totalAmount=199.99,
            paymentMethod=PaymentMethod.CREDIT_CARD  # Ensure PaymentMethod is defined
        )

        # Creating an Order Item
        order_item = OrderItem.objects.create(
            order=order,
            product=product,
            quantity=2,
            price=19.99
        )

        return Response({
            'product': ProductSerializer(product).data,
            'order': OrderSerializer(order).data,
            'order_item': OrderItemSerializer(order_item).data
        })
    except Exception as e:
        return Response({"error": str(e)}, status=400)
