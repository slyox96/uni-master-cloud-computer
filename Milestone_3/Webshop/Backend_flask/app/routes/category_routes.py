from flask import Blueprint, request, jsonify
from app.models import db, Category

category_bp = Blueprint("category", __name__)

# GET: Alle Kategorien abrufen
@category_bp.route("/categories", methods=["GET"])
def get_categories():
    categories = Category.query.all()
    return jsonify([{"id": category.id, "name": category.name} for category in categories])

# POST: Neue Kategorie erstellen
@category_bp.route("/categories", methods=["POST"])
def create_category():
    data = request.json
    if "name" not in data:
        return jsonify({"error": "Name is required"}), 400

    category = Category(name=data["name"])
    db.session.add(category)
    db.session.commit()
    return jsonify({"id": category.id, "name": category.name}), 201
