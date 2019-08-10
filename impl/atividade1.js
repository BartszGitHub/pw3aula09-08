var nota = 0;
var media = function (n1) {
    if (nota > 86) {
        return ("A");
    }
    else if (nota > 60) {
        return ("B");
    }
    else if (nota > 35) {
        return ("C");
    }
    else if (nota > 0) {
        return ("B");
    }
    else {
        return ("A");
    }
};
console.log("Conceito final \u00E9 " + media(nota));
