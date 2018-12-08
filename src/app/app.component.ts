import { Component, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  courses = COURSES;

  constructor() { }

  @ViewChild(CourseCardComponent)
  CourseCardComponent: CourseCardComponent;
  @ViewChild(CourseCardComponent, {read: ElementRef})
  CourseCardElement: ElementRef;
  @ViewChild('cardCompRef')
  cardComponentRef: CourseCardComponent;
  @ViewChild('cardCompRef', {read: ElementRef})
  cardElementRef: ElementRef;

  @ViewChildren(CourseCardComponent)
  CourseCardComponents: QueryList<CourseCardComponent>;
  @ViewChildren(CourseCardComponent, {read: ElementRef})
  CourseCardElements: QueryList<ElementRef>;
  @ViewChildren('cardCompRef')
  cardComponentRefs: QueryList<CourseCardComponent>;
  @ViewChildren('cardCompRef', {read: ElementRef})
  cardElementRefs: QueryList<ElementRef>;

  @ViewChild('container')
  container: ElementRef;

  ngAfterViewInit() {
    // console.log(this.courseCardComponent);
    // console.log(this.courseCardElement);
    // console.log(this.cardComponentRef);
    // console.log(this.cardElementRef);

    // console.log(this.CourseCardComponents);
    // console.log(this.CourseCardElements);
    // console.log(this.cardComponentRefs);
    // console.log(this.cardElementRefs);

    // console.log(this.container);
  }

  onCourseSelected(course: Course) {
    console.log('App component - click event bubbled...', course);
  }

}
