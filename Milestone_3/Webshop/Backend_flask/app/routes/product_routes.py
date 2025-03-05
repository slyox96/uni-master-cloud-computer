# app/routes/product_routes.py
from flask import Blueprint, jsonify, request
from app.models import db, Product

# Definiere Blueprint für Produkte
product_bp = Blueprint("product", __name__, url_prefix="/products")

# GET: Alle Produkte abrufen
@product_bp.route("/", methods=["GET"])
def get_products():
    products = Product.query.all()
    return jsonify([
        {
            "id": product.id,
            "name": product.name,
            "description": product.description,
            "price": product.price,
            "stock": product.stock,
            "image": product.image,
            "category_id": product.category_id
        }
        for product in products
    ])

# POST: Neues Produkt erstellen
@product_bp.route("/", methods=["POST"])
def create_product():
    data = request.json
    if not all(key in data for key in ["name", "description", "price", "stock", "category_id"]):
        return jsonify({"error": "Missing fields"}), 400

    product = Product(
        name=data["name"],
        description=data["description"],
        price=data["price"],
        stock=data["stock"],
        category_id=data["category_id"],
        image=data.get("image")
    )
    db.session.add(product)
    db.session.commit()
    return jsonify({"id": product.id, "name": product.name}), 201
