from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS, cross_origin
import writer
import os

app = Flask(__name__, static_folder='../frontend/build', static_url_path='/')
CORS(app)  # Allow cross-origin requests (needed for local development)

@app.route('/search', methods=['POST'])
@cross_origin()
def handle_search():
    data = request.json
    url = data.get('url')
    if url:
        # Perform your search function here
        # For example:
        # result = search_with_product_djetails(url)
        # return jsonify(result)
        return jsonify({"message": "URL received", "url": writer.search_with_product_details(url)})
    else:
        return jsonify({"error": "URL not provided"}), 400
    
@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')
if __name__ == '__main__':
    app.run(debug=True)
