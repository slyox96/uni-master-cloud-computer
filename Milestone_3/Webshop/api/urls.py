from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, OrderViewSet, OrderItemViewSet
from django.contrib import admin
from .views import create_product_order, ProductListCreate  # Fixed import

router = DefaultRouter()
router.register(r'products', ProductViewSet)  # `/api/products/`
router.register(r'orders', OrderViewSet)
router.register(r'orderitems', OrderItemViewSet)

urlpatterns = [
    path('', include(router.urls)),  # This will handle `/api/products/`
    path('create_product_order/', create_product_order),
    path('products-list/', lambda request: ProductListCreate.as_view()(request), name='product-list'),
]
