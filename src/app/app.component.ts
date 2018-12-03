import { Component, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
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

  @ViewChildren(CourseCardComponent)
  cardsCardComponent: QueryList<CourseCardComponent>;

  @ViewChildren(CourseCardComponent, {read: ElementRef})
  cardsElementRef: QueryList<ElementRef>;

  constructor() {
  }


  ngAfterViewInit() {

    console.log(this.cardsCardComponent);
    console.log(this.cardsCardComponent.first);

    console.log(this.cardsElementRef);
    console.log(this.cardsElementRef.first);


    this.cardsCardComponent.changes.subscribe(
      cards => console.log(cards)
    );

    this.cardsElementRef.changes.subscribe(
      cards => console.log(cards)
    );
  }

  onCoursesEdited() {
    this.courses.push(
      {
        id: 1,
        description: 'Angular core deep dive',
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        longDescription: 'A detailed walk-through of the most important part of Angular - the Core and Common modules',
        category: 'INTERMEDIATE',
        lessonsCount: 10
      }
    );
  }

  onCourseSelected(course: Course) {
    // console.log('App component - click event bubbled...', course);
  }

}
