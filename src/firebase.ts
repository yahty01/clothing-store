import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBC1X62n3q66ylli5n-ATjxor51dfKfmfc",
    authDomain: "slava-shop.firebaseapp.com",
    projectId: "slava-shop",
    storageBucket: "slava-shop.appspot.com",
    messagingSenderId: "32531422796",
    appId: "1:32531422796:web:939aad9a75b0de355c1ee9",
    measurementId: "G-WEZ26NRYG9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };