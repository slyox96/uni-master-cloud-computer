from flask import Blueprint, request, jsonify
from app.models import db, Order, OrderItem

order_bp = Blueprint("order", __name__)

# GET: Alle Bestellungen abrufen
@order_bp.route("/orders", methods=["GET"])
def get_orders():
    orders = Order.query.all()
    return jsonify([
        {
            "id": o.id,
            "created_at": o.created_at.isoformat(),
            "total_price": o.total_price,
            "items": [{"product_id": item.product_id, "quantity": item.quantity} for item in o.order_items]
        }
        for o in orders
    ])

# POST: Neue Bestellung erstellen
@order_bp.route("/orders", methods=["POST"])
def create_order():
    data = request.json
    if "items" not in data or not isinstance(data["items"], list):
        return jsonify({"error": "Invalid order format"}), 400

    order = Order(total_price=0.0)
    db.session.add(order)
    db.session.commit()

    total_price = 0
    for item in data["items"]:
        order_item = OrderItem(
            order_id=order.id,
            product_id=item["product_id"],
            quantity=item["quantity"],
            price_at_purchase=10.0  # Preis später berechnen
        )
        db.session.add(order_item)
        total_price += 10.0 * item["quantity"]  # Platzhalterpreis

    order.total_price = total_price
    db.session.commit()

    return jsonify({"id": order.id, "total_price": order.total_price}), 201
