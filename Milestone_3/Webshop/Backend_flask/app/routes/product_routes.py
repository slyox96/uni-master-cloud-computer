from flask import Blueprint, jsonify, request
from app.models import db, Product
from app.schemas import product_schema, products_schema  # Importiere die Marshmallow-Schemas

# Definiere Blueprint für Produkte
product_bp = Blueprint("product", __name__, url_prefix="/products")

# GET: Alle Produkte abrufen
@product_bp.route("/", methods=["GET"])
def get_products():
    products = Product.query.all()
    return jsonify(products_schema.dump(products))  # Nutze das Schema für saubere JSON-Ausgabe

# GET: Einzelnes Produkt abrufen
@product_bp.route("/<int:product_id>", methods=["GET"])
def get_product(product_id):
    product = Product.query.get(product_id)
    if not product:
        return jsonify({"error": "Product not found"}), 404
    return jsonify(product_schema.dump(product))

# POST: Neues Produkt erstellen
@product_bp.route("/", methods=["POST"])
def create_product():
    data = request.json
    required_fields = ["name", "description", "price", "stock", "category_id"]
    
    if not all(field in data for field in required_fields):
        return jsonify({"error": "Missing fields"}), 400

    product = Product(
        name=data["name"],
        description=data["description"],
        price=data["price"],
        stock=data["stock"],
        category_id=data["category_id"],
        image=data.get("image")  # Falls kein Bild angegeben wird, bleibt es None
    )
    db.session.add(product)
    db.session.commit()
    return jsonify(product_schema.dump(product)), 201  # Nutze Schema für JSON-Ausgabe

# PUT: Produkt aktualisieren
@product_bp.route("/<int:product_id>", methods=["PUT"])
def update_product(product_id):
    product = Product.query.get(product_id)
    if not product:
        return jsonify({"error": "Product not found"}), 404

    data = request.json
    if "name" in data:
        product.name = data["name"]
    if "description" in data:
        product.description = data["description"]
    if "price" in data:
        product.price = data["price"]
    if "stock" in data:
        product.stock = data["stock"]
    if "image" in data:
        product.image = data["image"]
    if "category_id" in data:
        product.category_id = data["category_id"]

    db.session.commit()
    return jsonify(product_schema.dump(product))

# DELETE: Produkt löschen
@product_bp.route("/<int:product_id>", methods=["DELETE"])
def delete_product(product_id):
    product = Product.query.get(product_id)
    if not product:
        return jsonify({"error": "Product not found"}), 404

    db.session.delete(product)
    db.session.commit()
    return jsonify({"message": "Product deleted"}), 200
