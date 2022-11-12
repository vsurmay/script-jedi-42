//Duplicate arguments
//http://www.codewars.com/kata/duplicate-arguments

function solution(...arg) {
  const argSet = new Set(arg);
  const result = arg.length === argSet.size ? false : true;
  return result;
}

//[JEDI LEVEL] Last Argument
//http://www.codewars.com/kata/last
function last(...list) {
  const result = list[list.length - 1];
  if (Array.isArray(result)) {
    return result[result.length - 1];
  } else if (typeof result === "string") {
    return result.slice(-1);
  } else {
    return result;
  }
}
