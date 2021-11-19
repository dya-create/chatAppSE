window.addEventListener("DOMContentLoaded", () => {

    const firebaseConfig = {
        apiKey: "AIzaSyBAPAS9oHu15taZfGh7sjUkw6n0zXKaouY",
        authDomain: "software-eng-project-6159f.firebaseapp.com",
        projectId: "software-eng-project-6159f",
        storageBucket: "software-eng-project-6159f.appspot.com",
        messagingSenderId: "797548759506",
        appId: "1:797548759506:web:9ccfb4066427842b3f200b",
        measurementId: "G-CVVV1HJ9QW"
    };

    firebase.initializeApp(firebaseConfig);

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

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