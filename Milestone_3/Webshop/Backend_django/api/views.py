from rest_framework import viewsets, generics
from rest_framework.response import Response
from rest_framework import status  # ✅ Import status
from rest_framework.decorators import api_view
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Product, Order, OrderItem, Category, PaymentMethod  # Ensure models are imported
from .serializers import ProductSerializer, OrderSerializer, OrderItemSerializer
from rest_framework import filters
from .serializers import CategorySerializer
from rest_framework.filters import SearchFilter



# ✅ Generic API View for Listing & Creating Products
class ProductListCreate(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    parser_classes = (MultiPartParser, FormParser)


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [filters.SearchFilter]  # Enable search
    search_fields = ['name', 'description']


# ✅ Order ViewSet
#class OrderViewSet(viewsets.ModelViewSet):
#    queryset = Order.objects.all()
#    serializer_class = OrderSerializer

class OrderItemViewSet(viewsets.ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

# ✅ OrderItem ViewSet
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
    
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ProductListByCategory(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = (SearchFilter,)
    search_fields = ['category__id']  # Filter by category ID

    def get_queryset(self):
        queryset = super().get_queryset()
        category_id = self.request.query_params.get('category_id', None)
        if category_id:
            queryset = queryset.filter(category__id=category_id)
        return queryset
