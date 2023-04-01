import os

from flask import Flask, make_response, render_template
from flask_restful import Api, Resource
from flask_cors import CORS

app = Flask(
    __name__,
    static_url_path='',
    static_folder='../client/build',
    template_folder='../client/build'
)
@app.route('/')
@app.route('/<int:id>')
def index(id=0):
    return render_template('index.html')

CORS(app)

app.json.compact = False

api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return make_response({'message': 'Success!'}, 200)

api.add_resource(HelloWorld, '/test')

if __name__ == '__main__':
    app.run(port=5555, debug=True)