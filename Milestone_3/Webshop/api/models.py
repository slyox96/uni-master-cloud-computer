from django.db import models
from django.utils import timezone


    

# Enum-like choices for OrderStatus
class OrderStatus(models.TextChoices):
    PENDING = 'PENDING'
    COMPLETED = 'COMPLETED'
    CANCELLED = 'CANCELLED'

# Enum-like choices for PaymentMethod
class PaymentMethod(models.TextChoices):
    CREDIT_CARD = 'CREDIT_CARD'
    PAYPAL = 'PAYPAL'
    BANK_TRANSFER = 'BANK_TRANSFER'

# Enum-like choices for Category
class Category(models.TextChoices):
    SHIRT = 'Shirt'
    PANT = 'Pant'
    SHOE = 'Shoe'
    ACCESSORY = 'Accessory'

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.FloatField()
    stock = models.IntegerField(default=0)
    category = models.CharField(max_length=50, choices=Category.choices, default=Category.SHIRT)
    image = models.CharField(max_length=255, default="http://example.com/placeholder.jpg")
    

    # Reverse relationships
    orders = models.ManyToManyField('Order', through='OrderItem', related_name='products')
    order_items = models.ManyToManyField('OrderItem', related_name='products')

    def __str__(self):
        return self.name

class Order(models.Model):
    orderNumber = models.CharField(max_length=100, unique=True)
    totalAmount = models.FloatField()
    status = models.CharField(max_length=20, choices=OrderStatus.choices, default=OrderStatus.PENDING)
    paymentMethod = models.CharField(max_length=20, choices=PaymentMethod.choices)
    

    def __str__(self):
        return self.orderNumber

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    price = models.FloatField()

    def __str__(self):
        return f"{self.quantity} x {self.product.name} in Order {self.order.orderNumber}"
