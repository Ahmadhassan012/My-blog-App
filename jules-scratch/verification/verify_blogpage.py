from playwright.sync_api import sync_playwright, Page, expect
import os

def test_blogpage_screenshot(page: Page):
    """
    This test verifies that the blog page is rendered correctly.
    """
    # 1. Arrange: Read the CSS content.
    with open('css/style.css', 'r') as f:
        css_content = f.read()

    # 2. Arrange: Go to the blog page.
    # We use os.path.abspath to get the full path to the file.
    file_path = os.path.abspath('_site/blog/index.html')
    page.goto(f'file://{file_path}')

    # 3. Act: Inject the CSS into the page.
    page.add_style_tag(content=css_content)

    # Wait for the styles to be applied. A small delay might be needed.
    page.wait_for_timeout(1000) # 1 second delay

    # 4. Assert: Confirm the page has loaded.
    # We expect the page title to contain "Blog".
    expect(page).to_have_title("Blog | My Tech Blog")

    # 5. Screenshot: Capture the final result for visual verification.
    page.screenshot(path="jules-scratch/verification/verification.png", full_page=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    test_blogpage_screenshot(page)
    browser.close()
