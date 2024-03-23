
import requests
from bs4 import BeautifulSoup, Comment
from selenium import webdriver

known_colors = [
    "black", "white", "red", "green", "blue",
    "yellow", "purple", "orange", "grey", "pink",
    "cyan", "magenta", "brown", "olive", "maroon",
    "beige", "ivory", "teal", "navy", "aquamarine",
    "turquoise", "silver", "lime", "coral", "peach",
    "gold", "indigo", "violet", "crimson", "khaki",
    "lavender", "jade", "azure", "amber", "cerulean",
    "charcoal", "ochre", "mustard", "moccasin", "chocolate",
    "copper", "cream", "emerald", "fuchsia", "sapphire",
    "scarlet", "sienna", "tan", "thistle", "tomato",
    "wheat", "sienna", "sangria", "periwinkle", "persimmon",
    "peachpuff", "orchid", "opalescent", "onyx", "olivedrab",
    "moss", "mintcream", "midnightblue", "mauve",
    "limegreen", "lightsteelblue", "lightcyan", "lavenderblush",
    "laserlemon", "isabelline", "honeydew", "heliotrope",
    "harlequin", "gunmetal", "goldenrod", "glaucous",
    "ghostwhite", "gamboge", "fulvous", "flax", "firebrick",
    "feldgrau", "falured", "etonblue", "eggshell", "ecru",
    "daffodil", "dandelion", "cosmiclatte", "coolgrey",
    "copperred", "coquelicot", "congo", "columbiablue",
    "cobalt", "coffee", "cinnabar", "citrine", "cinnabon",
    "chartreuse", "champagne", "celadon", "carmine", "cardinal",
    "caputmortuum", "canary", "camouflagegreen", "burlywood",
    "burgundy", "buff", "bronze", "brickred", "boysenberry",
    "bole", "blush", "blond", "bistre", "bisque", "bazaar",
    "battleshipgrey", "auburn", "asparagus", "arsenic",
    "armygreen", "antiquewhite", "amaranth",
    "alizarin", "aliceblue", "airforceblue", "africanviolet",
    "aero", "acidgreen",
    # Adding more specific clothing colors
    "army green", "electric blue", "neon green", "hot pink",
    "burnt orange", "deep sea blue", "sage green", "pale yellow",
    "dusty rose", "midnight black", "off white", "sky blue",
    "navy blue", "forest green", "royal blue", "soft pink",
    "bright red", "dark grey", "light grey", "metallic silver",
    "metallic gold", "neon orange", "neon yellow", "neon pink",
    "neon blue", "pastel blue", "pastel green", "pastel yellow",
    "pastel pink", "pastel purple", "bright yellow", "bright green",
    "bright blue", "bright purple", "bright pink", "dark red",
    "dark blue", "dark green", "dark yellow", "dark purple",
    "light blue", "light green", "light yellow", "light purple",
    "light pink", "dark pink", "dark orange"
]

# for the header (No change needed here, it's correctly defined)
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36'}

# Visibility check for text elements (No change needed here)
def tag_visible(element):
    if element.parent.name in ['style', 'script', 'head', 'title', 'meta', '[document]']:
        return False
    if isinstance(element, Comment):
        return False
    return True

# Extracting visible text from HTML (No change needed here)
def text_from_html(soup):
    texts = soup.findAll(string=True)
    visible_texts = filter(tag_visible, texts)  
    return " ".join(t.strip() for t in visible_texts)

def find_product_details(soup):
    # Initialize details dictionary
    details = {'name': None, 'color': None}
    
    # Heuristic for product name
    for tag in ['h1', 'h2']:
        print(tag)
        if not details['name']:
            name_tag = soup.find(tag)
            if name_tag:
                details['name'] = name_tag.text.strip()
                break  # Added comment: Stop search once the name is found

    # Use the text_from_html function to get the cleaned, visible text from the page
    # This function now directly receives the BeautifulSoup https://www2.hm.com/en_us/productpage.1096385001.htmlbject (soup) already parsed from the response content
    page_text = text_from_html(soup).lower()
    words = page_text.split()
    print(words)
    for word in words:
        # Check for direct color match
        if word in known_colors:
            details['color'] = word
            break
        # # Check for colors separated by slashes
        # if '/' in word and word in known_colors:
        #     details['color'] = word
    return details

def scrape_product(url):
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        
        driver = webdriver.Chrome()
        driver.get(url)
        html_source = driver.page_source

        # Close the browser
        driver.quit()

        # Parse the HTML content with BeautifulSoup
        soup = BeautifulSoup(html_source, 'html.parser')
        
        # Passing the BeautifulSoup object (soup) directly to find_product_details without re-parsing
        product_details = find_product_details(soup)  # Edited comment: Simplified the process by directly using soup
        
        # Construct the response text
        response_text = ''
        if product_details['name']:
            response_text += f'Name: {product_details["name"]}\n'
        else:
            response_text += 'Product name not found\n'
        
        if product_details['color']:
            response_text += f'Color: {product_details["color"]}\n'
        else:
            response_text += 'Product color not found\n'
        
        return response_text.strip()
    else:
        return f"Failed to access: {response.status_code}"

if __name__ == '__main__':
    url = input('Enter URL: ')
    print(scrape_product(url))
