from app import ma
from app.models.category import Category

class CategorySchema(ma.SQLAlchemySchema):
    class Meta:
        model = Category
        load_instance = True

    id = ma.auto_field()
    name = ma.auto_field()
    products = ma.Nested("ProductSchema", many=True, exclude=("category",))  # Verhindert Rekursion
