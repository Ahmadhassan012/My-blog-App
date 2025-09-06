
from playwright.sync_api import Playwright, Page, expect


def test_example(page: Page) -> None:
    page.goto("http://localhost:8080/")
    expect(page).to_have_title(re.compile("Jules's Website"))
