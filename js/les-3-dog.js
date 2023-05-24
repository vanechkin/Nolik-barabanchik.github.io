function half_perimetr() {
    return (a=b=c)/2
}

function square(a, b, c,){
    var p = half_perimetr
    return Math.sqrt(p*(p-a)*(p-b)*(p-c))
}
    

var a = prompt('введите сторону a')
var b = prompt('введите сторону b')
var c = prompt('введите сторону c')

alert('Площадь треугольника:' + square(a,b,c))