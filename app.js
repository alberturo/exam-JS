
// LocalStorage [Captura de dato con SetItem e Imprimirlo en el document]

localStorage.setItem('Pelicula','Harry Potter')

let val = localStorage.getItem('Pelicula')

document.querySelector(".tituloLS").innerHTML = val


// WebStorage

sessionStorage.setItem('Ocupacion', 'Ingeniero')

let val2 = sessionStorage.getItem('Ocupacion')

document.querySelector(".tituloSE").innerHTML = val2