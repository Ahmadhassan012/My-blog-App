import pytest
from fastapi.testclient import TestClient
from main import app, db
from uuid import UUID

client = TestClient(app)

# Fixture to reset the database before each test
@pytest.fixture(autouse=True)
def reset_db():
    # This is a simple way to reset our in-memory db for each test
    # A more robust solution would be needed for a real database
    original_db = [book.model_copy(deep=True) for book in db]
    yield
    db.clear()
    db.extend(original_db)


def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Welcome to the Library Management System"}

def test_get_books():
    response = client.get("/books")
    assert response.status_code == 200
    assert len(response.json()) == 2

def test_get_book_found():
    book_id = "f7b4c2c0-9b5a-4e1a-8f0a-2b1e1b7b3b3a"
    response = client.get(f"/books/{book_id}")
    assert response.status_code == 200
    data = response.json()
    assert data["id"] == book_id
    assert data["title"] == "The Great Gatsby"

def test_get_book_not_found():
    book_id = "00000000-0000-0000-0000-000000000000"
    response = client.get(f"/books/{book_id}")
    assert response.status_code == 404
    assert response.json() == {"detail": "Book not found"}

def test_create_book():
    new_book_data = {
        "title": "1984",
        "author": "George Orwell",
        "isbn": "978-0451524935",
        "published_date": "1949-06-08"
    }
    response = client.post("/books", json=new_book_data)
    assert response.status_code == 201
    data = response.json()
    assert data["title"] == new_book_data["title"]
    assert "id" in data

    # Verify the book was added
    res_get = client.get("/books")
    assert len(res_get.json()) == 3

def test_update_book():
    book_id = "f7b4c2c0-9b5a-4e1a-8f0a-2b1e1b7b3b3a"
    update_data = {
        "title": "The Great Gatsby - Revised",
        "author": "F. Scott Fitzgerald",
        "isbn": "978-0743273565",
        "published_date": "1925-04-10"
    }
    response = client.put(f"/books/{book_id}", json=update_data)
    assert response.status_code == 200
    data = response.json()
    assert data["title"] == "The Great Gatsby - Revised"

    # Verify the update in the list
    res_get = client.get(f"/books/{book_id}")
    assert res_get.json()["title"] == "The Great Gatsby - Revised"

def test_update_book_not_found():
    book_id = "00000000-0000-0000-0000-000000000000"
    update_data = {
        "title": "Non-existent book",
        "author": "N/A",
        "isbn": "N/A",
        "published_date": "2023-01-01"
    }
    response = client.put(f"/books/{book_id}", json=update_data)
    assert response.status_code == 404
    assert response.json() == {"detail": "Book not found"}

def test_delete_book():
    book_id = "f7b4c2c0-9b5a-4e1a-8f0a-2b1e1b7b3b3a"
    response = client.delete(f"/books/{book_id}")
    assert response.status_code == 204

    # Verify the book was deleted
    res_get = client.get(f"/books/{book_id}")
    assert res_get.status_code == 404

def test_delete_book_not_found():
    book_id = "00000000-0000-0000-0000-000000000000"
    response = client.delete(f"/books/{book_id}")
    assert response.status_code == 404
    assert response.json() == {"detail": "Book not found"}
