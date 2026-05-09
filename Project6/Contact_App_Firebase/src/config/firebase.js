import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCTqafyWUb3nJurbptam6NnE1iIpyDwzE0",
  authDomain: "vite-contactapp-38506.firebaseapp.com",
  databaseURL: "https://vite-contactapp-38506-default-rtdb.firebaseio.com/",
  projectId: "vite-contactapp-38506",
  storageBucket: "vite-contactapp-38506.firebasestorage.app",
  messagingSenderId: "34891850171",
  appId: "1:34891850171:web:955cf656a15c0bc96fa49e"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);