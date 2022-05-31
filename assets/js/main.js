//DOM==============================================
//Lev1_2-------------------------------------------
let example = document.getElementsByClassName('example');


const myFunction = () => {
    for (let i = 0; i < example.length; i++) {
        // example[i].style.backgroundColor = '#000';
        // example[i].style.color = '#fff';
        example[i].classList.toggle('toggle');
    }

}

//Lev2_1-------------------------------------------
let navHome = document.getElementById('navHome');
const navChange = () => {
    navHome.style.backgroundColor = 'pink';
    navHome.style.color = '#000';
    navHome.style.transform = 'rotateY(180deg)';
}

//Lev2_2-------------------------------------------
let vorname = document.getElementById('vorname');
let nachname = document.getElementById('nachname');
let land = document.getElementById('land');

const getInput = () => {
    console.log(vorname.value);
    console.log(nachname.value);
    console.log(land.value);
}

//Lev2_3-------------------------------------------

// let aTag = document.getElementsByTagName('a');
let aTag = document.querySelectorAll('.nav1');
let btn = document.getElementById('navChange1');

const changeMe = () => {
    aTag[0].style.backgroundColor = '#f6c89f';
    aTag[1].style.backgroundColor = '#ffe7d1';
    aTag[2].style.backgroundColor = '#4b8e8d';
    btn.style.backgroundColor = '#396362';
}

//Lev2_4-------------------------------------------

let btn1 = document.getElementById('button');
let farbeAuswahlen = document.getElementById('farbeAuswahlen');
let section5 = document.getElementById('section5');

btn1.addEventListener('click', (e) => {
    e.preventDefault();
    let selectColor = farbeAuswahlen.value;

    console.log((selectColor.replace(' ', '')).toLowerCase());
    section5.style.backgroundColor = (selectColor.replace(' ', '')).toLowerCase();

});

//Lev2_10-------------------------------------------

let element = document.getElementById('element');

const small = () => {
    console.log('small');
    element.classList.add('small');
    element.classList.remove('middle', 'bigCrazy');

}
const middle = () => {

    element.classList.remove('small', 'bigCrazy');
    element.classList.add('middle');
    console.log('middle');
}
const bigCrazy = () => {
    element.classList.add('bigCrazy');
    element.classList.remove('small', 'middle');
    console.log('big');
}


//Events==============================================

//Lev1_5-------------------------------------------

let btn2 = document.getElementById('clickMe');
let outputZähler = document.getElementById('output_zähler');
anzahl = 0;
outputZähler.innerHTML = anzahl;
btn2.addEventListener('click', (e) => {
    anzahl += 1;
    outputZähler.innerHTML = anzahl;
});

//Lev1_6-------------------------------------------

let mySelect = document.getElementById('my_select');
let optionSelected = document.getElementById('option_selected');

mySelect.addEventListener('change', (e) => {
    let selected = e.target.value;
    // console.log(selected);
    optionSelected.innerHTML = selected;
})


//Lev2_1-------------------------------------------

let listElement = document.querySelectorAll('#umschalter li');
let section9 = document.getElementById('section9');
// console.log(listElement);
listElement.forEach(element => {
    element.addEventListener('click', (e) => {
        let clicked = e.target.id;
        console.log(clicked);
        if (clicked === 'grauTaste') {
            section9.style.backgroundColor = 'gray';
        } else if (clicked === 'weissTaste') {
            section9.style.backgroundColor = 'white';
        } else if (clicked === 'blauTaste') {
            section9.style.backgroundColor = 'blue';
        } else if (clicked === 'gelbTaste') {
            section9.style.backgroundColor = 'yellow';
        }

    });
})

//Lev2_2-------------------------------------------
let key = document.getElementById('key');
let keyCode = document.getElementById('key_code');
let code = document.getElementById('code');
let outputKeyCode = document.getElementById('output_keycode');

document.body.addEventListener('keydown', (e) => {
    // console.log(e);

    console.log(e.key);
    key.innerHTML = e.key;
    code.innerHTML = e.code;
    keyCode.innerHTML = e.keyCode;
    outputKeyCode.innerHTML = e.keyCode;

})

//Lev3_1-------------------------------------------
let section11 = document.getElementById('section11');
let btn3 = document.querySelectorAll('.btn');
let demo = document.getElementById('demo');
let count = 0;

btn3.forEach(el => {
    console.log(el);
    el.addEventListener('click', (e) => {
        count += 1;
        demo.innerHTML = `Wir haben die Farbe ${count} mal geändert`;

        // console.log(e.target.id);
        if (e.target.id === 'rosa') {
            section11.style.backgroundColor = 'pink';
        } else if (e.target.id === 'lila') {
            section11.style.backgroundColor = 'violet';
        } else if (e.target.id === 'orange') {
            section11.style.backgroundColor = 'orange';
        }
    })
})
let red = 0;
let green = 0;
let blue = 0;
document.querySelectorAll('input[type="range"]').forEach(el => {
    el.addEventListener('change', (e) => {
        console.log(e.target.value);
        if (e.target.id === 'rot') {
            red = e.target.value;
        } else if (e.target.id === 'grun') {
            green = e.target.value;
        } else if (e.target.id === 'blau') {
            blue = e.target.value;
        }
        const toHex = (num) => {
            let hex = Number(num).toString(16);
            if (hex.length === 1) {
                hex = '0' + hex;
                return hex;
            }
            return hex;
        }

        console.log(toHex(2));

        section11.style.backgroundColor = `rgb(${red},${green},${blue})`;
        demo.innerHTML = `rgb${red},${green},${blue}= #${toHex(red)}${toHex(green)}${toHex(blue)}`;
    })

})

//Class_constructer ==============================================
//Lev1_1-------------------------------------------
class Ball {
    constructor(ballType = 'regular') {
        this.ballType = ballType;
    }
}
let ball1 = new Ball();
console.log(ball1);

let ball2 = new Ball("super")
console.log(ball2);
//Lev1_2-------------------------------------------

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     info() {
//         console.log(`${this.name} is ${this.age} years old.`);
//     }
// }
// let person = new Person('Max', 20);
// console.log(person);
// person.info();

//Lev1_3-------------------------------------------

let name = document.getElementById('name');
let age = document.getElementById('age');
let examCheck = document.getElementById('examCheck');
let button = document.getElementById('button1');
let result = document.getElementById('result');



button.addEventListener('click', () => {

    let person = new Person(name.value, age.value);
    person.info();
    person.writeInfo();
})

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    info() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
    writeInfo() {
        examCheck.checked ? result.innerHTML += ` <li style="color: red;">${this.name} , ${this.age} years old.</li>` : result.innerHTML += ` <li style="color: black;">${this.name} , ${this.age} years old.</li>`;
    }
}