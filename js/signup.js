const database = firebase.database();
const auth = firebase.auth();

const nameing = document.getElementById('nameing');
const cel = document.getElementById('cel');
const mailing = document.getElementById('mailing');
const contra = document.getElementById('contra');
const contra2 = document.getElementById('contra2');
const btnRegistrar = document.getElementById('btnRegistrar');

var ingreso = false; 

auth.onAuthStateChanged(

    (user) => {
        
        if(user !== null){
            if(ingreso){

                let nuevousuario = {
                       id:user.uid,
                       name: nameing.value,
                       tel: cel.value,
                       email: mailing.value,
                       password: contra.value, 
                };

                database.ref('Semana15/usuario/'+ nuevousuario.id).set(nuevousuario).then(
                    ()=> {
                        window.location.href = "index.html"
                    }
                );

            }else {

                window.location.href = "index.html";

            }

        }
        
    }


);

btnRegistrar.addEventListener('click', ()=>{


ingreso = true;


if (nameing.value === "" || cel.value === "" || mailing.value === "" || contra.value === ""){

    alert('rellene los campos');

}else {

    if(contra.value === contra2.value){
         
        auth.createUserWithEmailAndPassword(mailing.value, contra.value).then();

    } else {

        alert('La contraseña no son iguales')
    }


}

} );