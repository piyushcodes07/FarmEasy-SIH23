// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTM_BJ7Yh1AzToXIIq2nXh-x9d3jbT7ik",
  authDomain: "sih-autocomplete.firebaseapp.com",
  projectId: "sih-autocomplete",
  storageBucket: "sih-autocomplete.appspot.com",
  messagingSenderId: "827742159883",
  appId: "1:827742159883:web:c834485ea4b77c8db7f30e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// When you're ready, deploy your web app
// Put your static files (e.g., HTML, CSS, JS) in your app's deploy directory (the default is "public"). Then, run this command from your app's root directory:

// firebase deploy --only hosting:farmeasy


// FIREBASE > JSON

// {
//     "hosting": {
//       "site": "farmeasy",
//       "public": "public"
      
//     }
//   }



//

// rules_version = '2';

// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if false;
//     }
//   }
// }
// note icon
// All third party reads and writes will be denied
