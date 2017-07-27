const Rebase = require('re-base');
const firebase = require('firebase');
const app = firebase.initializeApp({
        apiKey: "AIzaSyBfG-e6eeb_rw6NKlFXKrxsrdoX0BiBxv8",
        authDomain: "what-8d85d.firebaseapp.com",
        databaseURL: "https://what-8d85d.firebaseio.com",
        storageBucket: "what-8d85d.appspot.com",
});
const base = Rebase.createClass(app.database());

export default base