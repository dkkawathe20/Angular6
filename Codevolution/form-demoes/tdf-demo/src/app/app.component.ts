import { Component, Testability } from '@angular/core';
import { User } from './models/user';
import { EnrollmentService } from './services/enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ["Angular", "React", "Vue"];
  userModel = new User('Rob', 'rob@test.com', 3334445566, 'default', 'morning', true);
  topicHasError = true;
  submitted = false;
  errorMessage = ''

  constructor(private enrollmentService: EnrollmentService) { }

  validateTopic(topic) {
    if (topic === "default") {
      this.topicHasError = true
    }
    else {
      this.topicHasError = false
    }
  }

  onSubmit() {
    //console.log(this.userModel);
    this.enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log('Success!', data)
        //,error => console.error('Error!', error)
        , error => this.errorMessage = error.statusText
      );
    //this.submitted = true;
  }
}
