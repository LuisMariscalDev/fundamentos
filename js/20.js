const saldo = 1000;
const pagar = 500;
const tarjeta = true

/*
 * || Or - Al menos una se cumple
 * && And - Revisa que todos se cumplan
*/

if(saldo > pagar || tarjeta) {
    console.log('Puedes pagar')
} else {
    console.log('No puedes pagar')
}