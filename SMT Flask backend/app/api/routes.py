
from flask import Flask, flash, jsonify, redirect, render_template, request, url_for, Blueprint

from ..models import Demon, User, user_comp, demons_skills
from flask_cors import cross_origin
from ..apiauthhelper import basic_auth_required, token_auth_required, basic_auth, token_auth
api = Blueprint('api', __name__)





##################### USER AUTHENTICATION ROUTES #############

@api.route('/api/signup', methods=["POST"])
def signUpPageAPI():
    data = request.json
   
       
    username = data['username']
    email = data['email']
    password = data['password']
    


    # add user to database
    user = User(username, email, password)

    user.saveToDB()

    return {
        'status': 'ok',
        'message': "Successfully created an account!"
    }

@api.route('/api/login', methods=["POST"])
@basic_auth.login_required
def getToken():
    user = basic_auth.current_user()
    return {
        'status': 'ok',
        'user': user.to_dict(),
    }


