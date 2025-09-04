from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
from uuid import UUID, uuid4
from datetime import date
from enum import Enum
from typing import List

class BookStatus(str, Enum):
    AVAILABLE = "available"
    CHECKED_OUT = "checked_out"

class Book(BaseModel):
    id: UUID = Field(default_factory=uuid4)
    title: str
    author: str
    isbn: str
    published_date: date
    status: BookStatus = BookStatus.AVAILABLE

class BookCreate(BaseModel):
    title: str
    author: str
    isbn: str
    published_date: date

app = FastAPI()

db: list[Book] = [
    Book(
        id=UUID("f7b4c2c0-9b5a-4e1a-8f0a-2b1e1b7b3b3a"),
        title="The Great Gatsby",
        author="F. Scott Fitzgerald",
        isbn="978-0743273565",
        published_date=date(1925, 4, 10),
        status=BookStatus.AVAILABLE
    ),
    Book(
        id=UUID("e5d4c1b0-8a4a-4e2a-9f1a-3c2e2c8c4c4b"),
        title="To Kill a Mockingbird",
        author="Harper Lee",
        isbn="978-0061120084",
        published_date=date(1960, 7, 11),
        status=BookStatus.CHECKED_OUT
    )
]

@app.get("/")
def read_root():
    return {"message": "Welcome to the Library Management System"}

@app.get("/books", response_model=List[Book])
def get_books():
    return db

@app.get("/books/{book_id}", response_model=Book)
def get_book(book_id: UUID):
    for book in db:
        if book.id == book_id:
            return book
    raise HTTPException(status_code=404, detail="Book not found")

@app.post("/books", response_model=Book, status_code=201)
def create_book(book_create: BookCreate):
    new_book = Book(**book_create.model_dump())
    db.append(new_book)
    return new_book

@app.put("/books/{book_id}", response_model=Book)
def update_book(book_id: UUID, book_update: BookCreate):
    for book in db:
        if book.id == book_id:
            book.title = book_update.title
            book.author = book_update.author
            book.isbn = book_update.isbn
            book.published_date = book_update.published_date
            return book
    raise HTTPException(status_code=404, detail="Book not found")

@app.delete("/books/{book_id}", status_code=204)
def delete_book(book_id: UUID):
    for i, book in enumerate(db):
        if book.id == book_id:
            del db[i]
            return
    raise HTTPException(status_code=404, detail="Book not found")
