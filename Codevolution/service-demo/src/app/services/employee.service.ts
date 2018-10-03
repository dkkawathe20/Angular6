import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from '../models/employee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// below are code for ng 5
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "./assets/data/employee1.json";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url)
      .pipe(
        //tap(employees => this.log('fethed employees')),
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse) {
    return throwError(error.message || "Internal Server error");
  }
}
