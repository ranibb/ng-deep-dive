import { Component, ViewChild, ElementRef } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  @ViewChild('cardRef')
  card1: CourseCardComponent;

  @ViewChild('cardRef', {read: ElementRef})
  card2: CourseCardComponent;

  @ViewChild('container')
  containerDiv: ElementRef;

  onCourseSelected(course: Course) {
    // console.log('App component - click event bubbled...', course);

    console.log(this.card1);
    console.log(this.card2);
    console.log(this.containerDiv);
  }

}
