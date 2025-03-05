from app.models import db
from datetime import datetime

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    total_price = db.Column(db.Float, nullable=False, default=0.0)

    order_items = db.relationship("OrderItem", back_populates="order", cascade="all, delete")
