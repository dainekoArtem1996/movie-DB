let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < 2; i++) {
    let a = +prompt('Один из последних просмотренных фильмов?', '');
    let b = +prompt('На сколько оцените его?', '');
    personalMovieDB.movies[a] = b;
}
console.log(personalMovieDB);
