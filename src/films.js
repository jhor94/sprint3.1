// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let resultDirectors = movies.map(movie => movie.director);
  console.log(resultDirectors);
  return resultDirectors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let result = movies.filter(function (movie) {
    if (movie.director === director)
      return true;
  })
  console.log(result);
  return result
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  let moviesDirector = getMoviesFromDirector(movies, director)
  let totalScore = moviesDirector.reduce(function (total, movie) {
    return total + movie.score
  }, 0)
  let averageScore = totalScore / moviesDirector.length;
  console.log(averageScore);
  return parseFloat(averageScore.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let newArray = movies.slice(0) // copio el array movies con slice
  let orderTitles = newArray.sort((function (a, b) { // con sort lo uso para ordenar le paso dos paramentros a y b
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  }))
  let arrayTitle = orderTitles.map(orderTitle => orderTitle.title)
  return arrayTitle.slice(0, 20) // pongo posicion 21 para que aparezca hasta el 20
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
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
  return orderYear

}
// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  let resultGenere = movies.filter(function (movie) {
    return movie.genre.includes(genre);
  })
  console.log(resultGenere)
  let scoreTotal = resultGenere.reduce(function (total, movie) {
    return total + movie.score
  }, 0)
  let mediaCategory = scoreTotal / resultGenere.length
  console.log(parseFloat(mediaCategory.toFixed(2)))
  return parseFloat(mediaCategory.toFixed(2));
};


// Exercise 7: Modify the duration of movies to minutes
function calculateDuration(duration){
  let hours = 0
  let minutes = 0
    const hoursMatch = duration.match(/(\d+)h/);
    const minutsMatch = duration.match(/(\d+)min/);

    if (hoursMatch) {
      hours = parseInt(hoursMatch[1], 10)
    }
    if (minutsMatch) {
      minutes = parseInt(minutsMatch[1], 10)
    }
  let result = (hours * 60) + minutes
  return result
  }

function hoursToMinutes(movies) {
  let newArray1 = movies.map(movie => {
    return {
    title: movie.title,
    year: movie.year,
    director: movie.director,
    duration: calculateDuration(movie.duration),
    genre: movie.genre,
    score: movie.score
    }
  })
  return newArray1
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies) {
  const moviesByYear = movies.reduce((acumulador, movie) => {
    if (!acumulador[movie.year]) {
      acumulador[movie.year] = [];
    }
    acumulador[movie.year].push(movie);
    return acumulador;
  }, {});

  console.log(moviesByYear)

  // Encontrar la mejor película de cada año
  const bestMovies = Object.keys(moviesByYear).map(year => {
    return moviesByYear[year].reduce((max, movie) => {
      return movie.score > max.score ? movie : max;
    });
  });

  // Imprimir las mejores películas de cada año
  bestMovies.forEach(movie => {
    console.log(`Year: ${movie.year}, Best Movie: ${movie.title}, Score: ${movie.score}`);
  });

  return bestMovies;

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
