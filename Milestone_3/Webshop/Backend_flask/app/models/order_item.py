from app.models import db

class OrderItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    quantity = db.Column(db.Integer, nullable=False, default=1)
    price_at_purchase = db.Column(db.Float, nullable=False)

    order_id = db.Column(db.Integer, db.ForeignKey("order.id"), nullable=False)
    order = db.relationship("Order", back_populates="order_items")

    product_id = db.Column(db.Integer, db.ForeignKey("product.id"), nullable=False)
    product = db.relationship("Product", back_populates="order_items")
