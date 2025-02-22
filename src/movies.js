


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(movies) {
  const allDirectors = movies.map(eachDirector => {
     eachDirector.director
  })
  return allDirectors
}
  

  

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const drama = movies.filter(eachMovie => {
    if (eachMovie.genre.includes('Drama') && eachMovie.director === ('Steven Spielberg')) {
      return true
    }
  })
  return drama.length
}






// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  const totalScore = movies.reduce((acc, eachMovie) => {
    if (eachMovie.score === undefined || eachMovie.score === '') {
      return eachMovie.score === 0
    }
    return (acc + eachMovie.score)
  }, 0)
  
  const total = totalScore / movies.length

  const totalMovies = parseFloat(total.toFixed(2))
  return totalMovies
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  const drama = movies.filter(eachMovie => {
  
    if (eachMovie.genre.includes('Drama')) {
      return true
   
    }
    return drama
    
  })

  const score = drama.reduce((acc, eachDrama) => {
    if (eachDrama.genre === undefined || eachDrama.genre === '') {
      return eachDrama === 0
    }

    return (acc + eachDrama.score)
  },0)

  const total = score/drama.length
  const totalMovies = parseFloat(total.toFixed(2))

  return totalMovies
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  const orderMovies = JSON.parse(JSON.stringify(movies))
  orderMovies.sort((year, title) => {
    if (year.year < title.year) return -1
    if (year.year > title.year) return 1
    if (year.title < title.title) return -1
    if (year.title > title.title) return 1
    
  })

  return orderMovies


}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const orderMovies = JSON.parse(JSON.stringify(movies))
  orderMovies.sort((a, b) => {
  return a - b 
  })
  const newMovies = Object.values(orderMovies)
  console.log(newMovies)

  const twentyMovies = newMovies.filter(eachMovie => {
    if (newMovies.length < 20) {
      return true
    }
   return twentyMovies
  })

  return orderMovies


}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
