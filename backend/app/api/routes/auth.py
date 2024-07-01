from fastapi import APIRouter, Depends
from app.schemas.user import UserCreate, UserRead
from app.services.user_service import UserService

router = APIRouter()

@router.post("/signup", response_model=UserRead)
def signup(user: UserCreate, service: UserService = Depends()):
    return service.create_user(user)

@router.post("/login")
def login():
    pass
