from flask import Flask, request, jsonify
from flask_cors import CORS
import boto3
from boto3.dynamodb.conditions import Key  # Import Key from boto3.dynamodb.conditions

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Enable CORS for all routes

# Specify the region and credentials here for testing purposes
dynamodb = boto3.resource(
    'dynamodb',
    region_name='us-east-1',  # Replace with your region
    aws_access_key_id='AKIA3GMCHGGU2WKJHCEA',  # Replace with your AWS Access Key ID
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

if __name__ == '__main__':
    app.run(debug=True, port=5000)