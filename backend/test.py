
import requests
from bs4 import BeautifulSoup, Comment
from selenium import webdriver
driver = webdriver.Chrome()
driver.get("https://www.zara.com/us/en/textured-striped-shirt-p05588525.html?v1=348330468&v2=2351464")
html_source = driver.page_source

# Close the browser
driver.quit()

# Parse the HTML content with BeautifulSoup
soup = BeautifulSoup(html_source, 'html.parser')