from app import ma
from app.models import Product
from app.schemas.category_schema import CategorySchema

class ProductSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Product
        load_instance = True

    id = ma.auto_field()
    name = ma.auto_field()
    description = ma.auto_field()
    price = ma.auto_field()
    stock = ma.auto_field()
    image = ma.auto_field()
    created_at = ma.auto_field()
    updated_at = ma.auto_field()
    category = ma.Nested(CategorySchema, exclude=("products",))  # Verhindert Endlosschleife
