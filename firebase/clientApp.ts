import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTM_BJ7Yh1AzToXIIq2nXh-x9d3jbT7ik",
  authDomain: "sih-autocomplete.firebaseapp.com",
  projectId: "sih-autocomplete",
  storageBucket: "sih-autocomplete.appspot.com",
  messagingSenderId: "827742159883",
  appId: "1:827742159883:web:c834485ea4b77c8db7f30e",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};
