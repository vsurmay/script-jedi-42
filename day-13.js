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
