class Contact{

    constructor(contacto){

        this.contacto =contacto;
    }


    pintar = () => {

        let componente = document.createElement('div');
        componente.id="contenedorcomponente";


        let contenedor = document.createElement('div');
        contenedor.id ="contenedormayor";

        let nombr = document.createElement('p');
        nombr.innerHTML = this.contacto.name;

        let telef = document.createElement ('p');
        telef.innerHTML = this.contacto.tel;

        let botonborrar = document.createElement('button');
        botonborrar.id = "botonborrar";
        botonborrar.innerHTML = "Borrar";

        botonborrar.addEventListener('click', ()=>{

            database.ref('Semana15/contactos/'+this.contacto.userid+'/'+this.contacto.id).set(null);

        })

        contenedor.appendChild(nombr);
        contenedor.appendChild(telef);

        componente.appendChild(contenedor);
        componente.appendChild(botonborrar);

        return componente;
    }


}