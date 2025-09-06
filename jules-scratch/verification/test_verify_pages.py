from playwright.sync_api import Page, expect

def test_about_page(page: Page):
    # Navigate to the about page
    page.goto("http://localhost:8080/about/")

    # Check that the title is correct
    expect(page).to_have_title("About Me | My Tech Blog")

    # Check that the heading is correct
    expect(page.get_by_role("heading", name="About Me")).to_be_visible()

    # Take a screenshot
    page.screenshot(path="jules-scratch/verification/about-page.png")

def test_contact_page(page: Page):
    # Navigate to the contact page
    page.goto("http://localhost:8080/contact/")

    # Check that the title is correct
    expect(page).to_have_title("Contact Me | My Tech Blog")

    # Check that the heading is correct
    expect(page.get_by_role("heading", name="Get in Touch")).to_be_visible()

    # Take a screenshot
    page.screenshot(path="jules-scratch/verification/contact-page.png")
