import random
class Calculator:
    def __init__(self) -> None:
        self.num = 0
    
    def __str__(self) -> str:
        return self.num
    
    def clear(self):
        self.num = 0
        return {"num" : 0}
    
    def add(self, num):
        self.num += num
        return {"num" : num}
    
    def sub(self, num):
        self.num -= num
        return {"num" : num}
    
    def mul(self, num):
        self.num *= num
        return {"num" : num}
    
    def div(self, num):
        self.num /= num
        return {"num" : num}
    
    def ran(self):
        self.num = random.randint(-1000000,1000000)
        print(self.num)
        return {"num" : self.num}