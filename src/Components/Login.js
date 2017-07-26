// Importing React
import React from 'react';

import base from 're-base';


class Login extends React.Component {

    authenticate(provider) {
        console.log(`Trying to log in with ${provider}`);

        base.authWithOAuthPopup(provider, this.authHandler)
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