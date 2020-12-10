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
  obtenerDivisibles(numero) {
    let i = 1;
    let suma = 0;
    do {
      if (numero % i == 0) {
        suma = suma + 1;
        i++;
      } else {
        i++;
      }
    } while (i <= numero);
    return suma;
  }
}

let app = new App();

console.log(app.factorial(5));
console.log(app.convertirAString(5));
console.log(app.obtenerDivisibles(6));
