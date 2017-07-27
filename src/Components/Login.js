// Importing React
import React from 'react';

import base from '../base.js';

import firebase from 'firebase';



class Login extends React.Component {

    constructor () {
        super();
        this.authHandler = this.authHandler.bind(this);
        this.authenticate = this.authenticate.bind(this);
        this.logout = this.logout.bind(this);
        this.renderLogin = this.renderLogin.bind(this);
        this.state = {
            uid: null,
            owner:null
        }
    }

    logout() {
        console.log('logout running')
    }

    authHandler(err, authData) {
        console.log('authHandler is running')

        if (err) {
            console.log(err);
            return;
        }

        const storeRef = base.database().ref(this.props.storeId);

        storeRef.once('value', (snapshot) => {
            const data = snapshot.val() || {};

            if(!data.owner) {
                storeRef.set({
                    owner: authData.user.uid
                })
            }

            this.setState({
                uid: authData.user.uid,
                owner: data.owner || authData.user.uid
            })

        })
    }


    authenticate(provider) {
        console.log(`Attempting to log with ${provider}`)
        if (provider = 'facebook') {
            const provider = new firebase.auth.FacebookAuthProvider()
            firebase.auth().signInWithPopup(provider).then(this.authHandler)
        }

    }
    renderLogin() {
        return (
            <nav className="login">
                <h2>Inventory</h2>
                <p>Sign in to manage your store's inventory</p>
                <button className="facebook" onClick={() => this.authenticate('facebook')}>Log In with Facebook</button>
                <button className="github" onClick={() => this.authenticate('github')}>Log in with Github</button>
            </nav>
        )}

    render () {

        const logout = <button onClick={this.logout}>Log Out</button>
            return (
                <div>
                    {logout}
                    {this.renderLogin()}
                </div>
            )
    }
}

export default Login