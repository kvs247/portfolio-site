from flask import Flask, make_response
from flask_restful import Api, Resource
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.json.compact = False

api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return make_response({'message': 'Success!'}, 200)

api.add_resource(HelloWorld, '/test')

if __name__ == '__main__':
    app.run(port=5555, debug=True)