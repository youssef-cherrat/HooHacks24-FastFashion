from flask import Flask, request, jsonify
from flask_cors import CORS
from writer import test_search
app = Flask(__name__)
CORS(app)  # Allow cross-origin requests (needed for local development)

@app.route('/search', methods=['POST'])
def handle_search():
    data = request.json
    url = data.get('url')
    if url:
        # Perform your search function here
        # For example:
        # result = search_with_product_details(url)
        # return jsonify(result)
        return jsonify({"message": "URL received", "url": test_search(url)})
    else:
        return jsonify({"error": "URL not provided"}), 400
    


if __name__ == '__main__':
    app.run(debug=True)
