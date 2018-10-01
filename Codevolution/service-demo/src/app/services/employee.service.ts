import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      { "id": 1, "name": "misko hevery", "age": 50 },
      { "id": 2, "name": "adom abrons", "age": 51 },
      { "id": 3, "name": "brendan eich", "age": 60 },
      { "id": 4, "name": "guido van rossum", "age": 55 }
    ];
  }
}
