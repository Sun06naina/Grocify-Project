import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmzwKprGDGL6B30e2vo1lu248BKCjWt2Q",
  authDomain: "grocify-379f3.firebaseapp.com",
  projectId: "grocify-379f3",
  storageBucket: "grocify-379f3.firebasestorage.app",
  messagingSenderId: "63296088173",
  appId: "1:63296088173:web:61500514758d70462f3764",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});