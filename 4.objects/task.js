function Student(name, gender, age) {
  // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student1 = new Student("Oleg", "male", 37);
let student2 = new Student("Ann", "female", 29);
let student3 = new Student("Victor", "male", 21);

//console.log(student3);

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
};

// ваш код для остальных методов

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
};

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = [...marks];
  } else {
    this.marks.push(...marks);
  }
};

Student.prototype.getAverage = function () {
  return this.marks.reduce((sum, current) => sum + current) / this.marks.length;
};

/*
Student.prototype.getAverage = function() {
  return this.marks.reduce(sum, current) {
    return sum + current;
  }, 0) / this.marks.length;
}

/*
Student.prototype.getAverage = function () {
  let sum = 0;
  let result = 0;

  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  } 
  result = sum / this.marks.length;
  return result;
}
*/

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
};

/*
student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);
console.log(student1.getAverage());
console.log(student1.subject);
console.log(student1.marks);
console.log(student1);
// {age: 37, gender: "male", marks: [5, 4, 5], name: "Tony", subject: "Algebra"}
*/
