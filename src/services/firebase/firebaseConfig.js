
import { initializeApp } from "firebase/app";
import { getFirestone} from 'firebase/firestone'

const firebaseConfig = {
  apiKey: "AIzaSyAslsol35C41oALnb6Nyrx-3rSUBSDn1rk",
  authDomain: "calache-ecommerce.firebaseapp.com",
  projectId: "calache-ecommerce",
  storageBucket: "calache-ecommerce.appspot.com",
  messagingSenderId: "217667225030",
  appId: "1:217667225030:web:eab48034c0cf511034dec7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const db = getFirestone(app)