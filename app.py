from flask import Flask
from flask import render_template
from units import *

app = Flask(__name__)
app.debug = True

@app.route('/')
def main():

    guy = new_char_dict()
    name = guy['Name']

    return render_template('base.html')

@app.route('/about')
def welcome():

    return render_template('about.html')

@app.route('/score')
def scores():

    return render_template('score.html')

@app.route('/help')
def help():

    return render_template('help.html')

@app.route('/story')
def story():

    return render_template('story.html')

@app.route('/battle')
def battle():

    return render_template('battle.html')

if __name__ == '__main__' :
    app.run()
