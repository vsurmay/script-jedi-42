//#19: Methods of String object--toUpperCase() toLowerCase() and replace()
//http://www.codewars.com/kata/5728203b7fc662a4c4000ef3
function alienLanguage(str) {
  const strUp = str.toUpperCase();
  const arrUp = strUp.split(" ");
  const result = [];
  for (let i = 0; i < arrUp.length; i++) {
    const lastLetLow = arrUp[i][arrUp[i].length - 1].toLowerCase();
    arrUp[i] = arrUp[i].slice(0, -1) + lastLetLow;
    result.push(arrUp[i]);
  }
  return result.join(" ");
}
//#21: Methods of String object--trim() and the string template
//http://www.codewars.com/kata/5729b103dd8bac11a900119e
function fiveLine(s){
  const t = s.trim();
  return `${t}\n${t.repeat(2)}\n${t.repeat(3)}\n${t.repeat(4)}\n${t.repeat(5)}`;
}
