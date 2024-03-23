
from serpapi import GoogleSearch
import json

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

    # write results to file
    with open('results.json', 'w') as f:
        json.dump(results["shopping_results"], f, indent=4)
    print("Results written to file")

def test_search():
    search_term = input("Enter search term: ")
    write_results_to_file(search_term)

if __name__ == "__main__":
    test_search()
