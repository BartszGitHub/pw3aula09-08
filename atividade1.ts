let nota: number = 0


let media = (n1:number) => {
    if (nota > 86 ) {
        return ("A")
    }   
    else if (nota > 60 ) {
        return ("B")
    }
    else if (nota > 35 ) {
        return ("C")
    }
    else if (nota > 0 ) {
        return ("B")
    }
    else {
        return ("A") 
    }

}

console.log( `Conceito final é ${media(nota)}`)