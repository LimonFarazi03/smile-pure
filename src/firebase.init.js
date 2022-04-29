import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFWJBnJyiwcNpfpsyohGZNLRG38W-QgJ8",
  authDomain: "smile-pure-90fd9.firebaseapp.com",
  projectId: "smile-pure-90fd9",
  storageBucket: "smile-pure-90fd9.appspot.com",
  messagingSenderId: "373168024525",
  appId: "1:373168024525:web:c3c7b08282c44fd62ab284"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth