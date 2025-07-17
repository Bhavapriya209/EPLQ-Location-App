// ✅ This is your working Firebase config using compat SDK

// Include this only once in HTML files:
  // <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
  // <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-auth-compat.js"></script>
  // <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore-compat.js"></script>

const firebaseConfig = {
  apiKey: "AIzaSyAu8MOuYdh-AIN9I7FLlm5S3j68fcKkMLE",
  authDomain: "eplq-location-app-68e7f.firebaseapp.com",
  projectId: "eplq-location-app-68e7f",
  storageBucket: "eplq-location-app-68e7f.appspot.com", // corrected typo (was .app)
  messagingSenderId: "1088541831287",
  appId: "1:1088541831287:web:604aa588b4f3b33b0c1672",
  measurementId: "G-ZWJCFB7LMB"
};

// Initialize Firebase (compat version)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
