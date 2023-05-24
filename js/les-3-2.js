
function square_square(side) {
    return side * side
}

function square_perimeter(side) {
    return side*4;
}

function cube(side) {
    function square() {
        return side*side;
    }

    return square()*side
}

otvet = prompt('введите стороны куба')
alert('число в кубе:' + cube(otvet))

// alert('площадь квадрата:' + square_square(otvet))
// alert('периметр квадрата:' + square_perimeter(otvet))