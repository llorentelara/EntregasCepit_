// Esta función calcula la potencia de un número dado una base y un exponente.
function calcularPotencia(base: number, exponente: number): number {
    // Si el exponente es menor que cero, lanza un error.
    if (exponente < 0) {
      throw new Error('El exponente debe ser mayor o igual a cero.');
    }
    // Calcula y devuelve la potencia utilizando el operador de exponente.
    return base ** exponente;
  }
  
  // Establece los valores de la base y el exponente.
  const base = 2;
  const exponente = 3;
  
  // Intenta calcular la potencia y mostrar el resultado.
  try {
    const resultado = calcularPotencia(base, exponente);
    console.log(`El resultado de ${base} elevado a ${exponente} es ${resultado}`);
  } catch (error) {
    // Si hay un error, lo muestra en la consola.
    console.error(error.message);
  }  