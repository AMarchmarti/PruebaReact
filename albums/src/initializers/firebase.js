import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAc2dfMVzKtKyoWVmt1zP8C4FT_a1LlFw0",
    authDomain: "albumsreact-39ac6.firebaseapp.com",
    databaseURL: "https://albumsreact-39ac6.firebaseio.com",
    projectId: "albumsreact-39ac6",
    storageBucket: "albumsreact-39ac6.appspot.com",
    messagingSenderId: "445412826877"
  };

  firebase.initializeApp(config)

  export default firebase;