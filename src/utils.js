function moviesWatchedCount(moviesModel) {
  let count = 0;
  for (const movie of moviesModel) {
    if (movie.userDetails.isAlreadyWatched) {
      count += 1;
    }
  }
  return count;
}

export {moviesWatchedCount}
