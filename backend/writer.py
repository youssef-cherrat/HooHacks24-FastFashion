from serpapi import GoogleSearch
import json
import colorscraper as scrape

def write_results_to_file(search_term):
    # appending necessary platforms to search query
    full_search_query = f"{search_term} ebay depop mercari poshmark realreal thredup"
    
    #set up parameters for api
    
    params = {
      "engine": "google_shopping",
      "q": full_search_query,
      "location": "United States",
      "api_key": "143843bcced7c5448ca482aca06a7ae38cba7959463237e78e2591b92133756a"
    }

    search = GoogleSearch(params)
    results = search.get_dict()
    
    filtered_results = []
    for item in results.get('shopping_results', []):
        # Check if the item meets your criteria
        if item.get('source') != "Shein":
            filtered_results.append(item)
            
    file_path = r'./hoohacks/public/websites.json'

    with open(file_path, 'w') as f:
        json.dump(filtered_results, f, indent=4)
    print("Results written to file")
    
def search_with_product_details(url):
    # Get product details using the scraped data
    product_details = scrape.scrape_product(url)
    # Check if both name and color are found
    if product_details['name'] and product_details['color']:
        # Construct the search term using the product details
        search_term = f"{product_details['color']} {product_details['name']}"
        print(f"Search term: {search_term}")
        write_results_to_file(search_term)
    else:
        print("Product details not found")



# def test_search():
#     url = input("URL: ")
#     search_with_product_details(url)

# if __name__ == "__main__":
#     test_search()
