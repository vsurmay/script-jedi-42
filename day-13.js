//Job Matching #1
//https://www.codewars.com/kata/56c22c5ae8b139416c00175d/
function match(candidate, job) {
  if (candidate.minSalary == undefined || job.maxSalary == undefined) {
    throw new "eror"();
  }
  if (candidate.minSalary * 0.9 <= job.maxSalary) {
    return true;
  } else {
    return false;
  }
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
