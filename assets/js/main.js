//DOM==============================================
//Lev1_2-------------------------------------------
let example = document.getElementsByClassName('example');


const myFunction = () => {
    for (let i = 0; i < example.length; i++) {
        example[i].style.backgroundColor = '#000';
        example[i].style.color = '#fff';

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