import React from 'react';

import base from '../base'

class Login extends React.Component {

    constructor () {
        super()
        this.authenticate = this.authenticate.bind(this);
        this.authHandler = this.authHandler.bind(this);

    }

    authenticate (provider) {
        console.log(`Attempting to log in with ${provider}`)

        base.authWithOAuthPopup(provider, this.authHandler)
    }

    authHandler (err, authData) {
        if (err) {
            console.log(err);
            return;
        }

        if (authData) {
            console.dir(authData)

            const uid = authData.user.uid

            console.log(uid)

            console.log(`going to ${uid}`)

            this.context.router.transitionTo(`/user/${uid}`)
        }

    }

    render () {
        return (
            <nav className="login">
                <h2>Inventory</h2>
                <p>Sign in to manage your store's inventory</p>
                <button className="facebook" onClick={() => this.authenticate('facebook')}>Log In with Facebook</button>
                <button className="github" onClick={() => this.authenticate('github')}>Log in with Github</button>
            </nav>
        )
    }
}

Login.contextTypes = {
    router: React.PropTypes.object
}

export default Login
