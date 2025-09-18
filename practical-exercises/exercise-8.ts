function getLetterGrade(score: number): void {
  if (score < 0 || score > 100) {
    console.log("Invalid score. Must be between 0 and 100.");
    return;
  }

  if (score >= 90) {
    console.log("Grade: A");
  } else if (score >= 80) {
    console.log("Grade: B");
  } else if (score >= 70) {
    console.log("Grade: C");
  } else if (score >= 60) {
    console.log("Grade: D");
  } else {
    console.log("Grade: F");
  }
}

// Test
getLetterGrade(95); // Grade: A
getLetterGrade(82); // Grade: B
getLetterGrade(59); // Grade: F
