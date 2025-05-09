let promessaDePizza = new Promise((resolve, reject) => {
    
    let pizzaEntregue = false;
    if (pizzaEntregue) {
        resolve('Pizza entregue com sucesso!');
    }else {
        reject('Entrega da pizza falhou');
    }
})

promessaDePizza.then(console.log).catch(console.error);