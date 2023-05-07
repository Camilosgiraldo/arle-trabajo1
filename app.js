const usuario = [];

while (usuario.length < 5) {
  let nombre = prompt("Ingrese nombre, se atendera lo pronto posible.");
  usuario.push(nombre);

  if (usuario.length == 5) {
    usuario.map((elemento, index)=>{
        setTimeout(() => {
          document.write(`se ha atendido al usuario: ${elemento}<br> `);
          console.log(elemento);

          setTimeout(() => {
            document.close()
            document.open()
            document.write('usuarios atendidos satisfactoriamente')
          }, 10000);
        }, index * 2000);
    });
  }
}

console.log(usuario);
