from fastapi import APIRouter, Depends
from app.schemas.user import UserRead
from app.services.user_service import UserService

router = APIRouter()

@router.get("/{user_id}", response_model=UserRead)
def get_user(user_id: int, service: UserService = Depends()):
    return service.get_user(user_id)
