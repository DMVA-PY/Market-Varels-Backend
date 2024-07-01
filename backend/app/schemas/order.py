from pydantic import BaseModel
from datetime import datetime

class OrderBase(BaseModel):
    user_id: int
    order_date: datetime

class OrderCreate(OrderBase):
    pass

class OrderRead(OrderBase):
    id: int

    class Config:
        orm_mode = True
