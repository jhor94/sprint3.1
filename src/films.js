// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let resultDirectors = movies.map(movie => movie.director);
  console.log(resultDirectors);
  return resultDirectors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector() {
  let result = movies.filter(function (movie) {
    if (movie.director === 'Francis Ford Coppola')
      return true;
  })
  console.log(result);
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector() {
  let MediaResult = movies.reduce(function (total, movie) {
    return (total + movie.score) / 2
  }, 0)
  console.log(MediaResult.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically() {
  let newArray = movies.slice(0, 20)// con esto escojo la posicion de 0 al 20
  console.log(newArray)
  let orderTitle = newArray.sort((function (a, b) { // con sort lo uso para ordenar le paso dos paramentros a y b
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  }))
  console.log(orderTitle)
}

// Exercise 5: Order by year, ascending
function orderByYear() {
  let newArray = movies.slice(0, 20)// con esto escojo la posicion de 0 al 20
  let orderYear = newArray.sort((function (a, b) { // con sort lo uso para ordenar le paso dos paramentros a y b

    if (a.year === b.year) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    } else { return a.year - b.year }
  }))
  console.log(orderYear)

}
// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(genre) {
let categoryFilms = movies.filter(movie => movie.genre === genre);
console.log(categoryFilms)
//let mediaCategory = categoryFilms.reduce((total, movie) => ((total + movie.score) / 2),0)
//console.log(mediaCategory.toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
