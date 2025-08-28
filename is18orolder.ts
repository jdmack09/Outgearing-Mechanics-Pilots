function isEighteenOrOlderByDOB(birthDateString) {
  const today = new Date();
  const birthDate = new Date(birthDateString);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  // Adjust age if the birthday hasn't occurred yet this year
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age >= 18;
}

// Example usage:
let dob1 = "2000-01-15"; // User born in 2000
if (isEighteenOrOlderByDOB(dob1)) {
  console.log("Access granted: User is 18 or older.");
} else {
  console.log("Access denied: User is under 18.");
}

let dob2 = "2010-06-20"; // User born in 2010
if (isEighteenOrOlderByDOB(dob2)) {
  console.log("Access granted: User is 18 or older.");
} else {
  console.log("Access denied: User is under 18.");
}