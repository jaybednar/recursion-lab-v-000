function printString(myString) {
  console.log(myString[0]);
 
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(string) {
  let mySubString;
  if (string.length > 1) {
    mySubString = string.substring((string.length - 1));
    reverseString(mySubString);
  } else {
    return true;
  }
}
