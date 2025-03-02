# app/routes/__init__.py
from flask import Blueprint

# Definiere den Haupt-Blueprint für die API
api_bp = Blueprint("api", __name__, url_prefix="/api")

# Importiere die API-Routen
from app.routes.category_routes import category_bp
from app.routes.product_routes import product_bp  # Importiere den Produkt-Blueprint
from app.routes.order_routes import order_bp

from app.routes.email_routes import email_bp

# Registriere die Blueprints
api_bp.register_blueprint(category_bp)
api_bp.register_blueprint(product_bp)  # Registriere den Produkt-Blueprint
api_bp.register_blueprint(order_bp)

api_bp.register_blueprint(email_bp)
