import { Component, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef, ViewEncapsulation, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { CoursesService } from './services/courses.service';
import { CONFIG_TOKEN, AppConfig } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Default and Recommended
  // encapsulation: ViewEncapsulation.None // Without Encapsulation
  // encapsulation: ViewEncapsulation.ShadowDom // Works like Emulated; It will become default after its implementation in browser is completed.
})
export class AppComponent implements AfterViewInit, OnInit {

  courses$: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig
  ) {
    console.log(config);
  }

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

  ngOnInit() {
    this.courses$ = this.coursesService.loadCourses();
  }

  save(course: Course) {
    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log('Course Saved!')
      );
  }

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

    // console.log(this.highlighted);
  }

  onCourseSelected(course: Course) {
    console.log('App component - click event bubbled...', course);
  }

  onToggle(appHighlighted: boolean) {
    // console.log(appHighlighted);
  }

}
