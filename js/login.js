const database = firebase.database();
const auth = firebase.auth();

const maillog = document.getElementById('maillog');
const passwordlog = document.getElementById('passwordlog');
const aceptar = document.getElementById('aceptar');

auth.onAuthStateChanged(

    (user) => {

        if (user !== null){

            window.location.href = "index.html";

        }

    }

);

aceptar.addEventListener('click',()=>{

    auth.signInWithEmailAndPassword(maillog.value, passwordlog.value).then(
        (validar) => {

            window.location.href = "index.html";
        }).catch(
            (error)=>{

                alert(error.message);
            }
        )
    
});