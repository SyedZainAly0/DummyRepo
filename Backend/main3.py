from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# IMPORTANT: This allows your Vite frontend (usually port 5173) 
# to talk to your Python backend (usually port 8000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dummy Data
mock_products = [
    {"id": 1, "name": "Wireless Mouse", "price": 25.99, "in_stock": True},
    {"id": 2, "name": "Mechanical Keyboard", "price": 85.00, "in_stock": True},
    {"id": 3, "name": "USB-C Hub", "price": 45.50, "in_stock": False},
]

@app.get("/")
def read_root():
    return {"message": "Backend is running!"}

@app.get("/api/products")
def get_products():
    return mock_products