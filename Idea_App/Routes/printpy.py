from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/printpy', methods=['POST','GET'])
def printpy():
    prediction = "Hello World" # Call your machine learning model function
    return jsonify({
        "res" : prediction
    }
      )

if __name__ == '__main__':
    print("Hello World")
    app.run(host='0.0.0.0', port=5001)  # Run Flask app on a separate port
    print("Hello World")
