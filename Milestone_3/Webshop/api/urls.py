from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, OrderViewSet, OrderItemViewSet, CategoryViewSet
from .views import ProductListCreate
from . import views

router = DefaultRouter()
router.register(r'products', ProductViewSet)  
router.register(r'orders', OrderViewSet)
router.register(r'orderitems', OrderItemViewSet)
router.register(r'categories', CategoryViewSet)  # ✅ Moved outside urlpatterns

urlpatterns = [
    path('', include(router.urls)),  
    path('products-list/', ProductListCreate.as_view(), name='product-list'),
    path('products/search/', views.ProductListByCategory.as_view(), name='product-search'),
]
