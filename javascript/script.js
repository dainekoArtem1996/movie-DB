'use strict';
// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }
// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }
// rememberMyFilms();
// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено слишком мало фильмов!');
//     } else if (personalMovieDB >= 10 && personalMovieDB < 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB >= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Вы мне врете!');
//     }
// }
// detectPersonalLevel();
// function showMyDB() {
//     if (personalMovieDB.privat != true) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB();
// function writeYourGenres() {
//     for (let i = 1; i < 4; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }
// writeYourGenres();

// function first() {
//     setTimeout(function () {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }
// first();
// second();

// const obj = {
//     name: "artem",
//     surname: "daineko",
//     dateAndYear:{
//          date: 19,
//          year:1996
//     }
//  };
//       const {date, year} = obj.dateAndYear;
//       console.log(date);
// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));

// const obj = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4,
//     },
// };
const obj = {
    a: 2,
    b: 3,
};

const newOjb = { ...obj };
newOjb.a = 5;
console.log(obj);
console.log(newOjb);
