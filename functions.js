// function declaration/definitions
function displayInfo(mentor = "sam") {
  // mentor -- arguement with default value
  console.log("Hi Hello Everyone");

  console.log("I am", mentor);

  console.log("I am ur Mentor for the FSD Sessions");
  return "I am Your mentor";
}

displayInfo(); // function calling or invoking - default value will be used
displayInfo(undefined); // function calling or invoking - default value will be used
displayInfo(null); // null will be used
displayInfo("sanjay"); // sanjay will be used
