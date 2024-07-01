from sqlalchemy.orm import Session
from app.db.models.product import Product
from app.schemas.product import ProductCreate

class ProductService:
    def __init__(self, db: Session):
        self.db = db

    def create_product(self, product: ProductCreate):
        db_product = Product(**product.dict())
        self.db.add(db_product)
        self.db.commit()
        self.db.refresh(db_product)
        return db_product

    def get_product(self, product_id: int):
        return self.db.query(Product).filter(Product.id == product_id).first()
