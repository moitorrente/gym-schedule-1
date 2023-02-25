from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse

app = FastAPI()

app.mount("/src/static", StaticFiles(directory="src/static"), name="static")

@app.get("/")
async def read_index():
    with open ("src/index.html") as f:
        html = f.read()
    return HTMLResponse(content=html)

# Inicia el server: uvicorn main:app --reload --port 8081 --host 192.168.1.138