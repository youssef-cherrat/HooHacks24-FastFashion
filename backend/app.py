from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS, cross_origin
import boto3
from boto3.dynamodb.conditions import Key
import writer
import os

app = Flask(__name__, static_folder='../hoohacks/build', static_url_path='/')
CORS(app, resources={r"/*": {"origins": "*"}})  # Enable CORS for all routes

# DynamoDB configuration
dynamodb = boto3.resource(
    'dynamodb',
    region_name='us-east-1',  # Replace with your region
    aws_access_key_id='',  # Replace with your AWS Access Key ID
    aws_secret_access_key=''  # Replace with your AWS Secret Access Key
)
table = dynamodb.Table('GreenThreads')

@app.route('/save_item', methods=['POST'])
def save_item():
    data = request.json
    userId = data['userId']
    itemId = data['itemId']
    title = data['title']
    price = data['price']
    thumbnail = data['thumbnail']
    link = data['link']

    table.put_item(
        Item={
            'userId': userId,
            'itemId': itemId,
            'Title': title,
            'Price': price,
            'Thumbnail': thumbnail,
            'Link': link
        }
    )
    return jsonify({'message': 'Item saved successfully!'}), 200

@app.route('/get_saved_items', methods=['GET'])
def get_saved_items():
    userId = request.args.get('userId')
    if not userId:
        return jsonify({'error': 'Missing userId parameter'}), 400

    response = table.query(
        KeyConditionExpression=Key('userId').eq(userId)
    )
    items = response.get('Items', [])
    return jsonify(items), 200

@app.route('/delete_item', methods=['POST'])
def delete_item():
    data = request.json
    userId = data['userId']
    itemId = data['itemId']

    table.delete_item(
        Key={
            'userId': userId,
            'itemId': itemId
        }
    )
    return jsonify({'message': 'Item deleted successfully!'}), 200

@app.route('/search', methods=['POST'])
@cross_origin()
def handle_search():
    data = request.json
    url = data.get('url')
    if url:
        # Perform your search function here
        return jsonify({"message": "URL received", "url": writer.search_with_product_details(url)})
    else:
        return jsonify({"error": "URL not provided"}), 400

@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
