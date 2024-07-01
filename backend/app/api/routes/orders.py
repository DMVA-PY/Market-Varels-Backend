from fastapi import APIRouter, Depends
from app.schemas.order import OrderCreate, OrderRead
from app.services.order_service import OrderService

router = APIRouter()

@router.post("/", response_model=OrderRead)
def create_order(order: OrderCreate, service: OrderService = Depends()):
    return service.create_order(order)

@router.get("/{order_id}", response_model=OrderRead)
def get_order(order_id: int, service: OrderService = Depends()):
    return service.get_order(order_id)
