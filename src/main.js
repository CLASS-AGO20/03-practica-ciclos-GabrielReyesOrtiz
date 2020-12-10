export default class App {
  factorial(numero) {
    let suma = 1;
    for (let i = 1; i <= numero; i++) {
      suma = suma * i;
    }
    return suma;
  }
  convertirAString(numero) {
    let cadena = "";
    let i = 1;
    while (i <= numero) {
      cadena = cadena + "*";
      i++;
    }
    return cadena;
  }
}

let app = new App();

console.log(app.factorial(5));
console.log(app.convertirAString(5));
