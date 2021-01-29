import firebaseApp from "firebase/app";
import 'firebase/auth';
import 'firebase/firebase-firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCkYlti4rNEAX-RBfkpcC01E3E69f0ROKk",
    authDomain: "task-for-fast-rewards.firebaseapp.com",
    databaseURL: "https://task-for-fast-rewards-default-rtdb.firebaseio.com",
    projectId: "task-for-fast-rewards",
    storageBucket: "task-for-fast-rewards.appspot.com",
    messagingSenderId: "708576502112",
    appId: "1:708576502112:web:71245907032d77fad43e05"
};



class Firebase {
    constructor() {
        firebaseApp.initializeApp(firebaseConfig);
        this.auth = firebaseApp.auth();
        this.db =firebaseApp.firestore();
    }
    login(email, password, callback){
        return this.auth.signInWithEmailAndPassword(email, password).then((user)=>{
            callback(user)
        });
    }
    logOut(){
        return this.auth.signOut();
    }
    async register (name, email, password){
        await this.auth.createUserWithEmailAndPassword(email,password);
        return this.auth.currentUser.updateProfile({
            displayName:name
        })
    }
}
const fire_db = new Firebase();
export default fire_db;