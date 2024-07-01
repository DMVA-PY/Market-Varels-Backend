from fastapi import FastAPI
from app.api.routes import auth, orders, products, users

app = FastAPI()

app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(users.router, prefix="/users", tags=["users"])
app.include_router(products.router, prefix="/products", tags=["products"])
app.include_router(orders.router, prefix="/orders", tags=["orders"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the E-commerce API"}
