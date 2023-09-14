import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCW_zN-SgZhVUPNpLW7QQj-7m4oCPzuEUU",
  authDomain: "webslate-13366.firebaseapp.com",
  projectId: "webslate-13366",
  storageBucket: "webslate-13366.appspot.com",
  messagingSenderId: "911902414208",
  appId: "1:911902414208:web:ee6988e0dcb5e2b5639d65",
  measurementId: "G-85CG97H43N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };