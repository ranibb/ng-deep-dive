import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  title = COURSES[1].description;

  price = 9.993513462;

  rate = 0.67;

  course2 = COURSES[1];

  startDate = new Date(2000, 0, 1);

  onCourseSelected(course: Course) {
    console.log('App component - click event bubbled...', course);
  }

}
