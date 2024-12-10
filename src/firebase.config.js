import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOH9wQnXSOtDLQqn58CoecXOXsQZPSwPU",
  authDomain: "maltimart-dc7ba.firebaseapp.com",
  projectId: "maltimart-dc7ba",
  storageBucket: "maltimart-dc7ba.appspot.com",
  messagingSenderId: "693199041289",
  appId: "1:693199041289:web:9157e1c3f80ad041bed9d8",
};

// Initialize Firebases
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
