import requests

request = requests.get("http://127.0.0.1:8000/calculator/random")
print(request)