//#22: Unlock new skills--Arrow function,spread operator and deconstruction
//http://www.codewars.com/kata/572ab0cfa3af384df7000ff8
function shuffleIt(arr, ...arrays) {
  for (let i = 0; i < arrays.length; i++) {
    let numFirst = arrays[i][0];
    let numSecond = arrays[i][1];
    [arr[numFirst], arr[numSecond]] = [arr[numSecond], arr[numFirst]];
  }
  return arr;
}
//Job Matching #2
//https://www.codewars.com/kata/56c2578be8b139bd5c001bd8
function match(job, candidates) {
  const match = [];
  let equity = false;
  if (job.equityMax > 0) {
    equity = true;
  }
  for (let candidate of candidates) {
    if (
      (candidate.desiresEquity === true && equity) ||
      candidate.desiresEquity === false
    ) {
      let candidate_cities = [candidate.currentLocation];
      candidate_cities = candidate_cities.concat(candidate.desiredLocations);
      for (let location of job.locations) {
        if (candidate_cities.includes(location)) {
          match.push(candidate);
          break;
        }
      }
    }
  }
  return match;
}
