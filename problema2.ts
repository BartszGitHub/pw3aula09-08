let VelocidadeLimite: number = 120
let FrequenciaCarro: number = 0.7


let VelocidadeCarro = (FrequenciaCar:number) => 300*(1/FrequenciaCar - 1)

let resultado = function(FrequenciaCarro: number, VelocidadeLimite: number) {
    let velocCarro = VelocidadeCarro(FrequenciaCarro);
if (velocCarro > VelocidadeLimite * 1.2) {
        console.log( `Velocidade do carro: ${VelocidadeCarro(FrequenciaCarro)}, multa de R$ 574,62`)
}
else if (velocCarro > VelocidadeLimite) {
        console.log( `Velocidade do carro: ${VelocidadeCarro(FrequenciaCarro)}, multa de R$ 127,69`)
}
else {
    console.log("Velocidade Normal")
}

}

resultado(FrequenciaCarro, VelocidadeLimite)