from fastapi import FastAPI
from initialize import Calculator
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
cal = Calculator()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"Page":"Root"}

@app.get("/calculator/")
async def calculator():
    return cal

@app.get("/calculator/add/{number}/")
async def calculator_add(number : int):
    cal.add(number)
    return cal

@app.get("/calculator/sub/{number}/")
async def calculator_sub(number : int):
    cal.sub(number)
    return cal

@app.get("/calculator/mul/{number}/")
async def calculator_mul(number : int):
    cal.mul(number)
    return cal

@app.get("/calculator/div/{number}/")
async def calculator_div(number : int):
    if number !=  0:
        cal.div(number)
    else:
        return {"num" : "error"}
    return cal

@app.get("/calculator/clear/")
async def clear():
    cal.clear()
    return cal

@app.get("/calculator/random/")
async def random_num():
    cal.ran()
    return cal