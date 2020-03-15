module.exports = function check(str, bracketsConfig) {
  let patt = [];
  for (let i in bracketsConfig) {
    patt[i] = bracketsConfig[i].join('');
  } console.log(patt);
  i = 0;
  let j = 0;
  while (i<=str.length-2) {
    j=0;
      while (j<=patt.length-1) {
        if (str.slice(i,i+2) == patt[j]) {
        str = str.replace(patt[j],''); 
        i=-1;
        j=0;
        break;
      } 
      j++;
    }
    i++;
  }
  return str.length !== 0 ? false:true;
}
