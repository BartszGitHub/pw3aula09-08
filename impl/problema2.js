var VelocidadeLimite = 120;
var FrequenciaCarro = 0.7;
var VelocidadeCarro = function (FrequenciaCar) { return 300 * (1 / FrequenciaCar - 1); };
var resultado = function (FrequenciaCarro, VelocidadeLimite) {
    var velocCarro = VelocidadeCarro(FrequenciaCarro);
    if (velocCarro > VelocidadeLimite * 1.2) {
        console.log("Velocidade do carro: " + VelocidadeCarro(FrequenciaCarro) + ", multa de R$ 574,62");
    }
    else if (velocCarro > VelocidadeLimite) {
        console.log("Velocidade do carro: " + VelocidadeCarro(FrequenciaCarro) + ", multa de R$ 127,69");
    }
    else {
        console.log("Velocidade Normal");
    }
};
resultado(FrequenciaCarro, VelocidadeLimite);
