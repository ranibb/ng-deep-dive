import { Component, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef, ViewEncapsulation, OnInit, Inject, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './model/course';
import { CoursesService } from './courses/courses.service';
import { CONFIG_TOKEN, AppConfig } from './config';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { HighlightedDirective } from './courses/directives/highlighted.directive';
import {createCustomElement} from '@angular/elements';
import { CourseTitleComponent } from './course-title/course-title.component';

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

  coursesTotal: any;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig,
    private injector: Injector
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

    this.coursesService.loadCourses().subscribe(
      val => {
        this.coursesTotal = val.length;
        console.log(this.coursesTotal);
      }
    );

    /**
     * Turning a component into an element (creating a browser custom
     * element that is linked to the component)
     */
    const htmlElement = createCustomElement(CourseTitleComponent, {injector: this.injector});

    /**
     * Register the custom element in the browser using the customElements
     * API which a standard browser functionality.
     */
    customElements.define('course-title', htmlElement);
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

  onEditCourse() {
  }

}
