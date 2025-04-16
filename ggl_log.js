// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDe-jddPPJtjpbBIbh54QZX1MtFCTZLCNk",
    authDomain: "e-learning-40bef.firebaseapp.com",
    projectId: "e-learning-40bef",
    storageBucket: "e-learning-40bef.firebasestorage.app",
    messagingSenderId: "528648423814",
    appId: "1:528648423814:web:e200eeb3ca828e69190407"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "en";
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      window.location.href = "./filter.html";
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});

// Get elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("pass");
const nameError = document.getElementById("nameError");
const passError = document.getElementById("passError");
const loginForm = document.getElementById("login");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Reset previous errors
  nameError.innerHTML = "";
  passError.innerHTML = "";
  emailInput.classList.remove("error");
  passwordInput.classList.remove("error");

  // Basic validation
  let isValid = true;

  if (!emailInput.value.trim()) {
    emailInput.classList.add("error");
    nameError.innerHTML = '<i style="color: red">Email required</i>';
    isValid = false;
  }

  if (!passwordInput.value.trim()) {
    passwordInput.classList.add("error");
    passError.innerHTML = '<i style="color: red">Password required</i>';
    isValid = false;
  }

  if (!isValid) {
    showToast("Please fill all fields", "error");
    return;
  }

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      emailInput.value.trim(),
      passwordInput.value.trim()
    );

    showToast("Login successful! Redirecting...", "success");

    setTimeout(() => {
      window.location.href = "./filter.html";
    }, 1500);
  } catch (error) {
    passwordInput.value = "";

    let toastMessage = "Login failed";
    switch (error.code) {
      case "auth/invalid-email":
        emailInput.classList.add("error");
        nameError.innerHTML = '<i style="color: red">Invalid email format</i>';
        toastMessage = "Invalid email format";
        break;
      case "auth/user-not-found":
        emailInput.classList.add("error");
        nameError.innerHTML = '<i style="color: red">User not found</i>';
        toastMessage = "User not found";
        break;
      case "auth/wrong-password":
        passwordInput.classList.add("error");
        passError.innerHTML = '<i style="color: red">Wrong password</i>';
        toastMessage = "Wrong password";
        break;
      default:
        toastMessage = error.message || "Login failed";
    }

    showToast(toastMessage, "error");
    emailInput.focus();
  }
});



// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA0IL_p-27O2roRKTwcwPiigvLSn7IPjng",
//   authDomain: "e-learn-7a30a.firebaseapp.com",
//   projectId: "e-learn-7a30a",
//   storageBucket: "e-learn-7a30a.appspot.com",
//   messagingSenderId: "68251900851",
//   appId: "1:68251900851:web:ec90c10d8f4eede94dc9c6",
// };


  