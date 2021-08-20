function ingresar(){
    let usuario = document.getElementById('usser');
    let password = document.getElementById('pass');
    let btn = document.getElementById('boton');
}

class Usuario {
    constructor(usuario, contraseña){
        this.usuario = usuario;
        this.contraseña=contraseña;
    }

}
let us = localStorage.setItem("usuario",Usuario);
