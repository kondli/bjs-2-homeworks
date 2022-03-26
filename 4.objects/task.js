function Student(name, gender, age) {
    this.name = name,
    this.gender = gender,
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [];
    this.marks.push(mark);
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks === undefined){ 
    this.marks = [];
    this.marks.push(...marks);
    } else {
      this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function (marks) {
  return this.marks.reduce((acc, item) => acc + item , 0)/ this.marks.length;
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}
