import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyC3-083dz_H__WoVQcpc4F6OpSeVkokI5c",
    authDomain: "lading-page-c4458.firebaseapp.com",
    projectId: "lading-page-c4458",
    storageBucket: "lading-page-c4458.appspot.com",
    messagingSenderId: "238080402725",
    appId: "1:238080402725:web:08cd79c7bc109cc901e6cc",
    measurementId: "G-HVE03ZK2N5"
};


const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export {auth,db}