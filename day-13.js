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
  let matches = [];
  for (let candidate in candidates) {
    if (job.equityMax >= candidates[candidate].desiresEquity) {
    } else {
      continue;
    }
    if (job.locations.includes(candidates[candidate].currentLocation)) {
      matches.push(candidates[candidate]);
      continue;
    } else {
      for (let element in candidates[candidate].desiredLocations) {
        if (
          job.locations.includes(
            candidates[candidate].desiredLocations[element]
          )
        ) {
          matches.push(candidates[candidate]);
          break;
        }
      }
    }
  }
  return matches;
}
