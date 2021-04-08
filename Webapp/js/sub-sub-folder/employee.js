  import { person } from "./person.js";

  export class employee extends person {
      constructor(name, salary, hireDate) {
          super(name);
          this.salary = salary;
          this.hireDate = hireDate;

      }
      dojob(jobtitle) {
          return `${this.name} is a ${jobtitle} who earns ${this.salary}`
      }
  }