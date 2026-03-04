from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from pathlib import Path


BASE_URL = "https://taxijehut.com"


def shot(driver, name: str):
    Path("screenshots").mkdir(exist_ok=True)
    driver.save_screenshot(f"screenshots/{name}.png")
    print(f"[screenshot] screenshots/{name}.png")


def get_href(driver, css):
    el = driver.find_element(By.CSS_SELECTOR, css)
    return el.get_attribute("href")


def run():
    options = Options()
    options.add_argument("--headless=new")  # päälle jos haluat
    options.add_argument("--window-size=1400,900")


    driver = webdriver.Chrome(options=options)
    wait = WebDriverWait(driver, 10)

    try:
        # 1) Open site and verify main content
        driver.get(BASE_URL)

        # Odotetaan, että body latautuu
        wait.until(EC.visibility_of_element_located((By.CSS_SELECTOR, "body")))
        
        # Tarkistetaan otsikko
        assert "Taxijehut" in driver.title
        shot(driver, "01_home_loaded")

        # 2) Navigate to Fleet (Kalusto) page because that is where the cars are
        print("Navigating to Fleet page...")
        driver.get(BASE_URL + "/pages/fleet.html")
        
        # Odotetaan kalustolistan latautumista (id="fleet-list")
        wait.until(EC.presence_of_element_located((By.ID, "fleet-list")))
        
        # Etsitään kaikki autot (class="fleet-car")
        cards = driver.find_elements(By.CLASS_NAME, "fleet-car")
        print(f"Löydettiin {len(cards)} autoa.")
        assert len(cards) >= 1, "Gallery has no car cards!"
        shot(driver, "02_fleet_visible")

        # 3) Verify a phone number is visible in first card
        # Autokortissa on <a class="phone" href="tel:...">
        first_phone = cards[0].find_element(By.CSS_SELECTOR, "a.phone").text.strip()
        assert first_phone != "", "First car phone number is empty!"
        print("First car phone:", first_phone)
        shot(driver, "03_first_car_phone_visible")

        # 4) Navigate to Contact page for social buttons
        print("Navigating to Contact page...")
        driver.get(BASE_URL + "/pages/contact.html")
        wait.until(EC.presence_of_element_located((By.CLASS_NAME, "social-links")))
        
        # Etsitään linkit
        social_links = driver.find_elements(By.CSS_SELECTOR, ".social-links a")
        
        found_fb = False
        found_ig = False
        found_mail = False

        for link in social_links:
            href = link.get_attribute("href")
            if "facebook.com" in href:
                found_fb = True
            elif "instagram.com" in href:
                found_ig = True
            elif "mailto:" in href:
                found_mail = True
        
        if found_fb: print("Facebook link found.")
        if found_ig: print("Instagram link found.")
        if found_mail: print("Mail link found.")
        
        shot(driver, "04_contact_links_verified")

        print("✅ All tests completed successfully.")

    finally:
        driver.quit()


if __name__ == "__main__":
    run()
