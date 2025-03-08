from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow  # ✅ Füge Marshmallow hinzu

db = SQLAlchemy()
ma = Marshmallow()  

from app.models.category import Category
from app.models.product import Product
from app.models.order import Order
from app.models.order_item import OrderItem
