function bhaskara(a, b, c) {
    let delta = b**2 - 4*a*c
    let resultado1 = (-b + Math.sqrt(delta))/2*a
    let resultado2 = (-b - Math.sqrt(delta))/2*a
    if(delta < 0) {
        return "Delta é negativo"
    }
    return [resultado1, resultado2]
}

console.log(bhaskara(1, 12, -13))