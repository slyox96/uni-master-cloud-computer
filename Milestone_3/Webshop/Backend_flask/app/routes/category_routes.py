from flask import Blueprint, request, jsonify
from app.models import db, Category
from app.schemas import category_schema, categories_schema  # Importiere Marshmallow-Schemas

category_bp = Blueprint("category", __name__)

# GET: Alle Kategorien abrufen
@category_bp.route("/categories", methods=["GET"])
def get_categories():
    categories = Category.query.all()
    return jsonify(categories_schema.dump(categories))  # Nutze das Schema für saubere JSON-Ausgabe

# GET: Einzelne Kategorie abrufen
@category_bp.route("/categories/<int:category_id>", methods=["GET"])
def get_category(category_id):
    category = Category.query.get(category_id)
    if not category:
        return jsonify({"error": "Category not found"}), 404
    return jsonify(category_schema.dump(category))

# POST: Neue Kategorie erstellen
@category_bp.route("/categories", methods=["POST"])
def create_category():
    data = request.json
    if not data or "name" not in data:
        return jsonify({"error": "Name is required"}), 400

    category = Category(name=data["name"])
    db.session.add(category)
    db.session.commit()
    return jsonify(category_schema.dump(category)), 201  # Nutze das Schema für die Ausgabe

# PUT: Kategorie aktualisieren
@category_bp.route("/categories/<int:category_id>", methods=["PUT"])
def update_category(category_id):
    category = Category.query.get(category_id)
    if not category:
        return jsonify({"error": "Category not found"}), 404

    data = request.json
    if "name" in data:
        category.name = data["name"]

    db.session.commit()
    return jsonify(category_schema.dump(category))

# DELETE: Kategorie löschen
@category_bp.route("/categories/<int:category_id>", methods=["DELETE"])
def delete_category(category_id):
    category = Category.query.get(category_id)
    if not category:
        return jsonify({"error": "Category not found"}), 404

    db.session.delete(category)
    db.session.commit()
    return jsonify({"message": "Category deleted"}), 200
