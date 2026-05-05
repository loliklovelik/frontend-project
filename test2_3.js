class Student {
    #name;
    #age;
    #averageGrade;
  
    constructor(name, age, averageGrade) {
      this.#name = name;
      this.#age = age;
      this.#averageGrade = averageGrade;
    }
  
    getName() {
      return this.#name;
    }
  
    getAge() {
      return this.#age;
    }
  
    getAverageGrade() {
      return this.#averageGrade;
    }
  
    setName(newName) {
      this.#name = newName;
    }
  
    setAge(newAge) {
      if (newAge > 0) {
        this.#age = newAge;
      }
    }
  
    setAverageGrade(newGrade) {
      if (newGrade >= 0 && newGrade <= 5) {
        this.#averageGrade = newGrade;
      }
    }
  }
  

const student = new Student('Алёна', 21, 4.2);
console.log(`${student.getName()}, ${student.getAge()}, средний балл: ${student.getAverageGrade()}`);

student.setAverageGrade(4.8);
console.log(`После зимней сессии средний балл: ${student.getAverageGrade()}`);
