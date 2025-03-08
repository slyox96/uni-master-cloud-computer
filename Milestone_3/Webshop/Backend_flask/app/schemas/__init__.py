from app.schemas.category_schema import CategorySchema
from app.schemas.product_schema import ProductSchema

category_schema = CategorySchema()
categories_schema = CategorySchema(many=True)
product_schema = ProductSchema()
products_schema = ProductSchema(many=True)
