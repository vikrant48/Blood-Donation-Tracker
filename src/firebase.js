import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// // Log the Firebase Config to Debug
// console.log("Firebase Config:");
// console.log("API Key:", import.meta.env.VITE_FIREBASE_API_KEY);
// console.log("Auth Domain:", import.meta.env.VITE_FIREBASE_AUTH_DOMAIN);
// console.log("Project ID:", import.meta.env.VITE_FIREBASE_PROJECT_ID);
// console.log("Storage Bucket:", import.meta.env.VITE_FIREBASE_STORAGE_BUCKET);
// console.log("Messaging Sender ID:", import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID);
// console.log("App ID:", import.meta.env.VITE_FIREBASE_APP_ID);

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
