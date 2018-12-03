import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  courses = COURSES;

  @ViewChild('cardRef', {read: ElementRef})
  card: ElementRef;

  @ViewChild('courseImage')
  image: ElementRef;

  constructor() {
  }


  ngAfterViewInit() {
    console.log(this.image);
  }

  onCourseSelected(course: Course) {
    // console.log('App component - click event bubbled...', course);
  }

}
