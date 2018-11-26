export function compareTitles(a, b) {
  if (a.title < b.title) return -1;
  if (a.title > b.title) return 1;
  return 0;
}

export function compareGenre(a, b) {
  if (a.genre.name < b.genre.name) return -1;
  if (a.genre.name > b.genre.name) return 1;
  return 0;
}

export function compareStock(a, b) {
  if (a.numberInStock < b.numberInStock) return -1;
  if (a.numberInStock > b.numberInStock) return 1;
  return 0;
}

export function compareRate(a, b) {
  if (a.dailyRentalRate < b.dailyRentalRate) return -1;
  if (a.dailyRentalRate > b.dailyRentalRate) return 1;
  return 0;
}
