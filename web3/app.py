from flask import Flask, request, jsonify
from flask_cors import CORS
from better_profanity import profanity

app = Flask(__name__)
CORS(app)

profanity.load_censor_words()  # Load default word list

@app.route('/moderate', methods=['POST'])
def moderate():
    data = request.get_json()
    text = data.get('text', '')

    if profanity.contains_profanity(text):
        classification = 'offensive'
    else:
        classification = 'clean'

    return jsonify({'classification': classification})

if __name__ == '__main__':
    app.run(debug=True)
