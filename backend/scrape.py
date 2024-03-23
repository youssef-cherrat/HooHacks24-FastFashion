import requests
from bs4 import BeautifulSoup

def scrape_product_name(url):
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36'}
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Attempt to find the product name
        # This assumes the name is within an <h1> tag. If not, adjust accordingly.
        product_name_tag = soup.find('h1')
        if product_name_tag:
            product_name = product_name_tag.text.strip()
            return product_name
        else:
            return 'Product name not found'
    else:
        return f"Failed to access: {response.status_code}"

if __name__ == '__main__':
    url = input('Enter URL: ')
    product_name = scrape_product_name(url)
    print(product_name)
