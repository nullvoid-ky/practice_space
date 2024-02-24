from fastapi import FastAPI
from initialize import *
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
todo = Todo()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=[""],
)

@app.get("/")
async def root():
    return {"Page":"Root"}