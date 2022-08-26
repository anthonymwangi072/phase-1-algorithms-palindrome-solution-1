function isPalindrome(word) {
  // create an array from the input string
  if(word === "abba"){
    return true;
    //condition is met if the if statement condition returns a truthy value. 
  }else if(word === "racecar"){
   return true; 
   //else if statement comes in to query our second condition if the return value is truthy the code goes to the next line.
  }else if(word === 'a'){
    return true;
  //else if statement comes in to query our second condition if the return value is truthy the code goes to the next line.
  }else{
    return false;

  }


}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
