function areaTriangle(a, b, c) {
    let s = (a + b + c) / 2
    return Math.sqrt(s * ((s - a) * (s - b) * (s - c)))
}

let area = areaTriangle(10, 10, 10)
console.log(area)
