from sqlalchemy.orm import Session
from app.db.models.order import Order
from app.schemas.order import OrderCreate

class OrderService:
    def __init__(self, db: Session):
        self.db = db

    def create_order(self, order: OrderCreate):
        db_order = Order(**order.dict())
        self.db.add(db_order)
        self.db.commit()
        self.db.refresh(db_order)
        return db_order

    def get_order(self, order_id: int):
        return self.db.query(Order).filter(Order.id == order_id).first()
