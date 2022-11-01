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
//[JEDI LEVEL] #20: Methods of String object--charAt() charCodeAt() and fromCharCode()
//http://www.codewars.com/kata/57284d23e81185ae6200162a
function topSecret(str) {
  const s = str.split("");
  for (let i = 0; i < s.length; i++) {
    s[i] = String.fromCharCode(s[i].charCodeAt() - 3);
    let k = s[i].charCodeAt();
    if ((k < 97 && k > 90) || (k < 65 && k > 58)) {
      s[i] = String.fromCharCode(k + 26);
    }
    if (k < 57) {
      s[i] = String.fromCharCode(k + 3);
    }
  }
  return s.join("");
}

//question1: The top secret file number is...
answer1 = "3125";
//question2: Super agent's name is...
answer2 = "iMWlXm";
//question3: He stole the treasure is...
answer3 = "Toilet paper";

//#21: Methods of String object--trim() and the string templat
//http://www.codewars.com/kata/5729b103dd8bac11a900119e
function fiveLine(s) {
  const t = s.trim();
  return `${t}\n${t.repeat(2)}\n${t.repeat(3)}\n${t.repeat(4)}\n${t.repeat(5)}`;
}
