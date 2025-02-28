# filters.py
import django_filters
from .models import Product

class ProductFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_expr='icontains', label='Produktname')  # Filtert nach Produktname
    min_price = django_filters.NumberFilter(field_name='price', lookup_expr='gte', label='Min Preis')  # Filtert nach Mindestpreis
    max_price = django_filters.NumberFilter(field_name='price', lookup_expr='lte', label='Max Preis')  # Filtert nach Höchstpreis
    category = django_filters.CharFilter(field_name='category__name', lookup_expr='icontains', label='Kategorie')  # Filtert nach Kategorie

    class Meta:
        model = Product
        fields = ['name', 'min_price', 'max_price', 'category']
