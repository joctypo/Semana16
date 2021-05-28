const auth = firebase.auth();

const adicionar = document.getElementById('adicionar');
const namecontacto = document.getElementById('namecontacto');
const telefonocontact = document.getElementById('telefonocontact');
const nuevocontact = document.getElementById('nuevocontact');
const cancelar = document.getElementById('cancelar');
const salir = document.getElementById('salir');
const formulario = document.getElementById('formulario');
const contactosfeed = document.getElementById('contactosfeed');

let usuario = null; 

auth.onAuthStateChanged(

    (user) => {
        if (user !== null){
                database.ref('Semana15/usuario/'+ user.uid).once('value',
                    (data) => {
                        let usua = data.val(); 
                        usuario = usua.id;    
                        loadcontacts();

                    }
                )
        }else {

            window.location.href = "login.html";

        }
    }
);

loadcontacts = () =>{

    database.ref('Semana15/contactos/'+usuario).on('value',function(data){
        contactosfeed.innerHTML='';

        
        data.forEach(

            navegar => {
                let informacion = navegar.val();
                let contact = new Contact(informacion);
                contactosfeed.appendChild(contact.pintar());
            }

        )

    }
    
    );
}

nuevocontact.addEventListener('click', ()=>{

    if(namecontacto.value === "" || telefonocontact.value === ""){

        alert("Faltan datos");

    }else {

        database.ref()
        let nom = namecontacto.value;
        let cel = telefonocontact.value;
        let reference = database.ref('Semana15/contactos/'+usuario).push();

        let creacion = {
            id: reference.key,
            userid: usuario,
            name: nom,
            tel: cel,

        }
        reference.set(creacion);
        namecontacto.value="";
        telefonocontact.value="";

    }
})


adicionar.addEventListener('click', ()=>{

    formulario.style.display = "flex";

})

cancelar.addEventListener('click', ()=>{

    formulario.style.display = "none";
})

salir.addEventListener('click', ()=>{

    auth.signOut().then(
        ()=> {

         usuario = null;
         window.location.href = "login.html";   
        }


    ).catch(
        (error)=> {

            alert(error.mesagge);
        }


    );
})



