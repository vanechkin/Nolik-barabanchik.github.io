function hello() {
    document.getElementById('example').innerHTML = 'Привет страна'
}

function reset() {
    document.getElementById('example').innerHTML = ''
}

function set_text(id, text) {
    document.getElementById(id).innerHTML = text
}

function set_text2(id, text) {
    document.getElementById(id).innerHTML = text
}

function set_text3(id, text) {
    document.getElementById(id).innerHTML = text
}

function submit() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var status = document.getElementById("status");

    if (name == '') {
        status.innerHTML = 'Заполните поле ФИО'
    } else if (phone == '') {
        status.innerHTML = 'Заполните поле phone'
    } else if (email == '') {
        status.innerHTML = 'Заполните поле email'
    } else {
        status.innerHTML = `Регестрация прошла успешно. Ваши данные теперь наши    :) ФИО - ${name} e-mail: ${email} телефон:  ${phone}`;
    }
}


function set_body_color_red() {
    document.body.style.backgroundColor = 'red';
}


function set_body_color(color) {
    document.body.style.background = color;
}

function input_color() {
    var input_color = document.getElementById('color').value;


    set_body_color(input_color);
}


function set_font_size(id, size) {
    document.getElementById(id).style.fontSize = size;
}

function lampOn() {
    document.getElementById('lamp').src = "images/pic_bulbon.gif"
    document.getElementById('main').style.backgroundColor = '#fff';
    document.getElementById('main').style.color = '#000';
}

function lampOff() {
    document.getElementById('lamp').src = "images/pic_bulboff.gif"
    document.getElementById('main').style.backgroundColor = '#000';
    document.getElementById('main').style.color = '#fff';

}

function deleteTitele() {
    document.getElementById('title').style.display = 'none'
}

function createButton() {
    var btn = document.createElement('BUTTON');
    btn.innerHTML = "Новая кнопка";
    document.getElementById('buttonList').appendChild(btn);
    
}

function createP() {
    var btn = document.createElement('P');
    btn.innerHTML = "Новый абзац";
    document.getElementById('PList').appendChild(btn);
}

//Cоздание объекта
var person = new Object();

//Добавление свойств со значением
person.name = 'Вася'
person.surname = 'Пупкин'
person.age = '333'
person.weight = '50'
person.fullname = function() {
    return this.name + '' + this.surname
}


function showPerson() {
    document.getElementById('person').innerHTML = person.fullname() + ':' +  person.age
}

//cоздать объукт авто

//Создать свойство и дать им значение
// brand - audi
//model - A6
//year - 2020
//color - чёрный

//Объявить функцию showAvto
//функция должна записывать содержимое абзаца #avto название свойств с их начениями
//Например: Бренд: Audi
//для переноса нового свойства на новую строчку

var avto = new Object();
avto.brend = 'audi'
avto.model = 'A6'
avto.year = '2020'
avto.color = 'Чёрный'
avto.fullAvto = function() {
    document.getElementById('avto').innerHTML = 'Бренд:' + this.brand + '<br>' + 'Модель:' + this.model + '<br>' + 'Год:' + avto.year + '<br>' + 'Цвет:' + avto.color + '<br>'
}

function showAvto() {
    return avto.fullAvto();
}


let cat = {
    poroda: 'sphinx',
    color: 'black',
    age: '3 y.o.'
    
}

cat.eyes = 'green'
cat.showInfo = function() {
    document.getElementById('cat').innerHTML = `порода: ${cat.poroda} <br>` + `Цвет: ${cat.color} <br>` + `Возраст: ${cat.age} <br>` + `Глаза: ${cat.eyes} <br>`
}

const questions = [
    {
        questions: 'вопрос 1', answers:{
            1: 'no',
            2: 'no',
            3: 'yes',
            4: 'no'
        },
        rightAnswer
    },
    {
        questions: 'вопрос 1', answers:{
            1: 'no',
            2: 'no',
            3: 'yes',
            4: 'no'
        },
        rightAnswer
    },
    {
        questions: 'вопрос 1', answers:{
            1: 'no',
            2: 'no',
            3: 'yes',
            4: 'no'
        },
        rightAnswer
    }
]

let testContainer = document.getElementById('test');
let resultButton = document.getElementById('resultButton');
let resultButtont = document.getElementById('result');

function generateTest(questions, testContainer, resultContainer, resultButton) {
    let out = [];
    let answers;

    for(let i=0; i<questions.lenght; i++) {
        answers = [];
        for(let ans_text in questions[i].answers) {
            answers.push(
                    `<lable><br><input type="radio" name="question${i}"
                    value="${ans_text}"> ${ans_text}) ${questions[i].answers[ans_text]} </label>`
                );
            }
            out.push(
                `<div class="question"> ${questions[i].question} </div><div class="answers"> ${answers.join('')} </div>`
            )
    }
}

textContain.innerHTML = out.join('');

generateText(questions, testContainer, resultContainer);

function showResults(questions, testContainer, resultContainer)
    let answerContainers = testContainer.querySelectorAll('.answers');

    let userAnswer = '';
    let rightAnswersNum = 0;

    for(let i=0; i<questions.lenght; i++){
    
    }


