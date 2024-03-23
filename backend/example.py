
from serpapi import GoogleSearch
import json

def write_results_to_file(results):
    with open('results.json', 'w') as f:
        json.dump(results, f, indent=4)

params = {
  "engine": "google_shopping",
  "q": "black shirt ebay depop mercari poshmark",
  "location": "United States",
  "api_key": "143843bcced7c5448ca482aca06a7ae38cba7959463237e78e2591b92133756a"
}


search = GoogleSearch(params)
results = search.get_dict()

write_results_to_file(results)
print("Results saved to results.json")