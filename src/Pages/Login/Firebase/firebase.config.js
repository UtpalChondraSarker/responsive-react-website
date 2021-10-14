console.log(process.env);
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,

};

export default firebaseConfig;




// apiKey: "AIzaSyDFoNo8lDxRQawa3RqWteQT30OEOXxXeVE",
// authDomain: "genius-car-mechanics-12708.firebaseapp.com",
// projectId: "genius-car-mechanics-12708",
// storageBucket: "genius-car-mechanics-12708.appspot.com",
// messagingSenderId: "898051599710",
// appId: "1:898051599710:web:be09bcd86918514385b3cf"