import requests as r
from app import app
from app.services import finddemon
from flask import (Flask, flash, jsonify, redirect, render_template, request,
                   url_for)
from flask_login import current_user, login_required, login_user, logout_user

from .models import Demon, User, user_comp, demons_skills
from flask_cors import cross_origin
from .apiauthhelper import basic_auth, token_auth
import json



from .test import demondata, skilldata


#If I get the absolute index length of how long Demons is, import random package, then I can use random to choose a random number in the length of Demons 

#make sure we're calling to one demon, figure out logic to go in between the 2 applications and what they'll be able to access
#
@app.route('/')
def index():
    return render_template('index.html')


@app.route('/demons')
def demons():

    demondata["status"] = "ok"

    return demondata

@app.route('/skills')

def skilldata():
    return skilldata 

if __name__ == '__main__':
    app.run(debug=True)

@app.route('/demon/<demon_name>', methods=["GET", "POST"])
def demon(demon_name):

    #Checking if demon is already in DB to not add it if it is
    demon_data = Demon.query.filter(Demon.name == demon_name).first()
    print(demon_data)

    if demon_data:
        return {
        'status': 'ok',
        'message': 'Demon already exists',
        'demon': demon_data
    }
    
    #Else, perform the finddemon function with the demon_name and add it to the DB
    demon_data = finddemon(demon_name)
    print("line 49")

    new_demon = Demon(demon_data["name"], demon_data["hp"], demon_data["strength"], demon_data["magic"], demon_data["defense"], demon_data["weak"], demon_data["null"], demon_data["repel"], demon_data["lore"])

    new_demon.saveToDB()

    return {
        'status': 'ok',
        'message': 'Demon added to DB!',
        'demon': demon_data
    }
    
@app.route('/catch_demon/<name>', methods=["POST"])
@token_auth.login_required
def add_to_comp(name):
    demon = Demon.query.filter(Demon.name == name).first()
    print("test")
    current_user = token_auth.current_user() 
    # print(demon not in current_user.demon)
    # Can't use "current_user" for a react app, have to know whos logged in based on token auth

    print(current_user.demon.count())
    if current_user.demon.count() < 5 and demon not in current_user.demon:
        current_user.catch_demon(demon)

    else:
        print("You cannot get more demons")
    
    return {
        'status': 'ok',
        'message': 'Demon added to Comp!'
        }

@app.route('/demon/<int:demon_id>/delete', methods=["GET"])
def deleteDemon(demon_id):
    demon = Demon.query.get(demon_id)
    print(demon)
    current_user.delete_my_demon(demon)

    return {
        'status': 'ok',
        'message': 'Demon deleted from Comp!'
        }

# @app.route('/battle', methods=["GET", "POST"])
# def battle():



##################### USER AUTHENTICATION ROUTES #############

# @app.route('/signup', methods=["POST"])
# def signUpPageAPI():
#     data = request.json
   
       
#     username = data['username']
#     email = data['email']
#     password = data['password']
    


#     # add user to database
#     user = User(username, email, password)

#     user.saveToDB()

#     return {
#         'status': 'ok',
#         'message': "Succesffuly created an account!"
#     }

# @app.route('/login', methods=["POST"])
# @basic_auth.login_required
# def getToken():
#     user = basic_auth.current_user()
#     return {
#         'status': 'ok',
#         'user': user.to_dict(),
    # }






