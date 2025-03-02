from flask import Blueprint

# Definiere Blueprints
api_bp = Blueprint("api", __name__, url_prefix="/api")

# Importiere die API-Routen
from app.routes.category_routes import category_bp
from app.routes.product_routes import product_bp
from app.routes.order_routes import order_bp

# Registriere die Blueprints unter "/api"
api_bp.register_blueprint(category_bp)
api_bp.register_blueprint(product_bp)
api_bp.register_blueprint(order_bp)
