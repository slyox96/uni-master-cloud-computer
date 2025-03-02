from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Importiere die einzelnen Modelle
from app.models.category import Category
from app.models.product import Product
from app.models.order import Order
from app.models.order_item import OrderItem
