export default class App {
  factorial(numero) {
    let suma = 1;
    for (let i = 1; i <= numero; i++) {
      suma = suma * i;
    }
    return suma;
  }
}

let app = new App();

console.log(app.factorial(5));
