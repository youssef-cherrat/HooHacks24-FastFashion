
from serpapi import GoogleSearch

params = {
  "engine": "google_images",
  "q": "black shirt ebay",
  "location": "United States",
  "api_key": "143843bcced7c5448ca482aca06a7ae38cba7959463237e78e2591b92133756a"
}

search = GoogleSearch(params)
results = search.get_dict()

print(results)