import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBSOiob1Q9YAdkQCQbsu2nwX_TboCl8dnY",
    authDomain: "e-commerce-skate.firebaseapp.com",
    projectId: "e-commerce-skate",
    storageBucket: "e-commerce-skate.firebasestorage.app",
    messagingSenderId: "839786941504",
    appId: "1:839786941504:web:f8abfc382800518457a3a5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función para obtener TODOS los productos
export const getItems = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));
    const products = [];
    querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
    });
    return products;
};

// Función para obtener UN producto por ID
export const getItemById = async (id) => {
    const docRef = doc(db, "items", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        return null;
    }
};

export { db };