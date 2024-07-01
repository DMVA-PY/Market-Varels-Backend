from fastapi import APIRouter, Depends
from app.schemas.product import ProductCreate, ProductRead
from app.services.product_service import ProductService

router = APIRouter()

@router.post("/", response_model=ProductRead)
def create_product(product: ProductCreate, service: ProductService = Depends()):
    return service.create_product(product)

@router.get("/{product_id}", response_model=ProductRead)
def get_product(product_id: int, service: ProductService = Depends()):
    return service.get_product(product_id)
