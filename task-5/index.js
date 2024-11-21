class Student{
    name;
    grade;
setgrade(newgrade){
    this.grade=newgrade;
    console.log(newgrade);
}
getgrade(){
    console.log(this.grade);
}
constructor(name,garde){
    this.name=name;
    this.grade=garde;
}
}
var abhi=new Student(abhi,9.8);
abhi.setgrade(10);
abhi.getgrade();
console.log("----------------------------------");
var Rishi=new Student(Rishi,9.7);
Rishi.getgrade();
Rishi.setgrade(9.8);
Rishi.getgrade();