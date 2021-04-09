 import { person } from "./sub-sub-folder/person.js";

 var p1 = new person("Ana Smith", new Date("1998-12-15").toISOString().substring(0, 10));
 var p2 = new person("Bob Jone", new Date("1945-11-16").toISOString().substring(0, 10));
 var p3 = new person("Carlos Slim Helu", new Date("1976-09-24").toISOString().substring(0, 10));
 var Person = [p1, p2, p3];

 for (var pr in Person) {
     console.log(Person[pr].toString());
 }