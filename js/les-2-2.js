var animals = ['Cat', 'Dog', 'Cow', 'Fish']

//indexOf - определяет индекс жлемент в мастиве//
//alert(animals.indexOf('Cow'))

alert('Исходный список: ' + animals)    

//splice - уд. эл массива с опред. индекса в опр. колв-ве//
newAnimals = animals.splice
animals.splice(2,1)
alert('Исходный список: ' + animals)
alert('Вырезанные эл список: ' + newAnimals)