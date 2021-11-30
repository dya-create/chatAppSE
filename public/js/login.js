//the need google firebse module are in the html
/* should update to something like 9.5
 <script src="https://www.gstatic.com/firebasejs/7.14.1/firebase-app.js" defer></script>
 <script src="https://www.gstatic.com/firebasejs/7.14.1/firebase-auth.js" defer></script>
*/

const firebaseConfig = {
    apiKey: "AIzaSyBAPAS9oHu15taZfGh7sjUkw6n0zXKaouY",
    authDomain: "software-eng-project-6159f.firebaseapp.com",
    projectId: "software-eng-project-6159f",
    storageBucket: "software-eng-project-6159f.appspot.com",
    messagingSenderId: "797548759506",
    appId: "1:797548759506:web:9ccfb4066427842b3f200b",
    measurementId: "G-CVVV1HJ9QW"
};


window.addEventListener("DOMContentLoaded", () => {

    firebase.initializeApp(firebaseConfig);

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

    //section to login in with email and password
    document.getElementById("login")
        .addEventListener("submit", (event) => {
            event.preventDefault();
            const login = event.target.login.value;
            const password = event.target.password.value;

            firebase
                .auth()
                .signInWithEmailAndPassword(login, password)
                .then(({ user }) => {
                    window.location.assign("/chatpage");

                }, reason => {
                    //rejection
                    window.alert(reason)
                });

            ///this block can be used as a new feature for security, which uses cookies   ///
            /* https://github.com/satansdeer/firebase-server-auth/blob/master/step-2/views/signup.html
            
            
            .then(({ user }) => {
                 return user.getIdToken().then((idToken) => {
                     return fetch("/sessionLogin", {
                         method: "POST",
                         headers: {
                             Accept: "application/json",
                             "Content-Type": "application/json",
                             "CSRF-Token": Cookies.get("XSRF-TOKEN"),
                         },
                         body: JSON.stringify({ idToken }),
                     });
                 });
             })
             .then(() => {
                 return firebase.auth().signOut();
             })
             .then(() => {
                 window.location.assign("/profile");
             }); */


            return false;
        });
});
//end of DOM

//https://firebase.google.com/docs/auth/web/google-signin
/** this function is used to sign in with a google account
 * a popup window will come up to signin 
 * using web version 8 
*/
function googleSign() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).then(()=>{
            window.location.assign("/chatpage")
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log(errorCode, errorMessage, email, credential)
        });

}



