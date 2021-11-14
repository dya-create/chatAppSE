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

    document.getElementById("signup")
        .addEventListener("submit", (event) => {
            event.preventDefault();
            const login = event.target.login.value;
            const password = event.target.password.value;

            firebase
                .auth()
                .createUserWithEmailAndPassword(login, password)
                .then(({ user }) => {
                    window.location.assign("/chat");

                }, reason => {
                    //rejection
                    window.alert(reason)
                });
            return false;
        });
});