let students = [
  { name: "Ali", scores: [90, 85, 92] },
  { name: "Davud", scores: [100, 100, 100] },
  { name: "Mammal", scores: [75, 80, 85] },
  { name: "Camil", scores: [90, 95, 85] },
];

let averageScores = students.map(student => {
  let total = student.scores.reduce((sum, score) => sum + score, 0);
  let average = total / student.scores.length;
  return { name: student.name, averageScore: average };
});

console.log(averageScores);
