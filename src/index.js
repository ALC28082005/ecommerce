import { StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';

const firebaseConfig = {
  apiKey: "AIzaSyAslsol35C41oALnb6Nyrx-3rSUBSDn1rk",
  authDomain: "calache-ecommerce.firebaseapp.com",
  projectId: "calache-ecommerce",
  storageBucket: "calache-ecommerce.appspot.com",
  messagingSenderId: "217667225030",
  appId: "1:217667225030:web:eab48034c0cf511034dec7"
};

initializeApp(firebaseConfig);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);


