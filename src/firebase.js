import firebase from 'firebase/app'
import 'firebase/auth'


const app = firebase.initializeApp({
        apiKey: "AIzaSyBD-T9zg6OAyjONGqGpO1pD5IqO4qfzfFU",
        authDomain: "auth-react-cours-9f07e.firebaseapp.com",
        projectId: "auth-react-cours-9f07e",
        storageBucket: "auth-react-cours-9f07e.appspot.com",
        messagingSenderId: "814993701545",
        appId: "1:814993701545:web:7854a07a027ac628f607b8"
})

export const auth = app.auth();
export default app;