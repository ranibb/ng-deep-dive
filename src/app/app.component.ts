import { Component, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  courses = COURSES;

  constructor() { }

  // @ViewChild(HighlightedDirective)
  // highlighted: HighlightedDirective;

  @ViewChild(CourseCardComponent, {read: HighlightedDirective})
  highlighted: HighlightedDirective;

  @ViewChild(CourseCardComponent)
  courseCardComponent: CourseCardComponent;
  @ViewChild(CourseCardComponent, {read: ElementRef})
  courseCardElement: ElementRef;
  @ViewChild('cardCompRef')
  cardComponentRef: CourseCardComponent;
  @ViewChild('cardCompRef', {read: ElementRef})
  cardElementRef: ElementRef;

  @ViewChildren(CourseCardComponent)
  courseCardComponents: QueryList<CourseCardComponent>;
  @ViewChildren(CourseCardComponent, {read: ElementRef})
  courseCardElements: QueryList<ElementRef>;
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

    console.log(this.highlighted);
  }

  onCourseSelected(course: Course) {
    console.log('App component - click event bubbled...', course);
  }

  onToggle(appHighlighted: boolean) {
    // console.log(appHighlighted);
  }

}
