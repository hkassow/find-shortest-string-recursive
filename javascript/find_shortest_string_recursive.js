function findShortestStringRecursive(arr) {
  console.log('hi')
  if (arr.length < 2){
    return arr[0]
  }
  if (arr.length === 2) {
    return (arr[0].length <= arr[1].length)? arr[0]: arr[1]
  }
  
  let right = arr.splice(Math.floor(arr.length/2))
  let left = arr
  return findShortestStringRecursive([findShortestStringRecursive([...left]),findShortestStringRecursive([...right])])
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
