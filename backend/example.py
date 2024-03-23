import requests

def reverse_image_search(image_url):
    api_key = "143843bcced7c5448ca482aca06a7ae38cba7959463237e78e2591b92133756a"
    search_url = "https://serpapi.com/search"
    params = {
        "engine": "google_reverse_image",
        "image_url": image_url,
        "api_key": api_key
    }

    response = requests.get(search_url, params=params)
    if response.status_code == 200:
        return response.json()
    else:
        return "Error: " + response.text

def filter_results(results):
    filtered_links = []
    domains = ["mercari.com", "poshmark.com", "ebay.com", "grailed.com", "depop.com"]
    for image in results.get("images_results", []):
        link = image.get("link", "")
        if any(domain in link for domain in domains):
            filtered_links.append(link)
    return filtered_links

if __name__ == "__main__":
    image_url = "URL_OF_THE_IMAGE_YOU_WANT_TO_SEARCH"
    results = reverse_image_search(image_url)
    if isinstance(results, dict):
        filtered_links = filter_results(results)
        print(filtered_links)
    else:
        print(results)
