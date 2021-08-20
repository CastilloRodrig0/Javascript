const persona = ['Rodrigo', 24, 48329];

//console.log('nombre: ' + persona[0]);

let persona1 = {
    nombre: "Rodrigo",
    edad: 24,
    ojos: 2,
};
// let persona2 ={
//     nombre:"Lucas",
//     edad : 24,
//     ojos:2,
//     propiedad4: function(){
//         let random =30;
//         this.edad=random;

//     }
//     };
// persona1.educacion='estudiante ingenieria';
// //console.log(persona1,persona2);
// persona2.propiedad4();
// console.log(persona2.propiedad4);

// // let persona0={
// //     nombre: 'Castillo',
// //     edad: '24 años',
// //     metodo: function(){
// //         console.log('nombre: '+ nombre);
// //     }

// // };
// // function persona4(nombre,edad){

//     this.nombre='RODRIGO',
//     this.edad=24

// };
//console.log(persona4);

// let mascota=
// {
//  raza:'salchicha',
//  patas:4,
//   hablar: function()
//     {

//      console.log('mi raza es'+ this.raza);
//     }
// // };
// let mascota ={
//     raza:"salchicha",
//     edad : 7,
//     ojos:2,
//     hablar: function(){
//         console.log('hola soy un perro raza:' + this.raza + 'que ladra');
//     }
// };

let saludar = function () {
    let nombre = 'rodrigo';
    let edad = 24
    console.log(nombre);
}
console.log(mascota.hablar);
if (true) {
    let skill = 'javascript';
    const profesion = 'estudiante'
    console.log(profesion);
}


//------------------Objetos------------------------//

class ObjetoPersona {
    constructor(nombre, edad, apellido) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.edad = edad
    }
    getNombreCompleto() {
        let nombreCompleto = this.nombre + " " + this.apellido;
    }
    setNombre() {
        this.nombre = nuevoNombre;
    }
}

let rodrigo = new ObjetoPersona('Rodrigo', 24);

class Profesor extends ObjetoPersona {
    constructor(nombre, apellido, edad, tipo) {
        super(nombre, apellido, edad);
        this.tipo = tipo;

    }
    tipoFormateado() {
        return ('Tipo de contratacion: ' + this.tipo);
    }
}
let profe = new Profesor('MAX', 35, 'developer');
