import { Component, Input, EventEmitter, Output, ContentChild, ElementRef, ContentChildren, QueryList, AfterContentInit, TemplateRef } from '@angular/core';
import { CourseImageComponent } from '../course-image/course-image.component';
import { CoursesService } from '../courses.service';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  providers: [
    CoursesService
  ]
})
export class CourseCardComponent implements AfterContentInit {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Input()
  noImageTpl: TemplateRef<any>;

  @Output('courseSelected')
  courseSelected = new EventEmitter<Course>();

  @Output('courseChanged')
  courseChanged = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent)
  courseImageComponent: CourseImageComponent;
  @ContentChild(CourseImageComponent, {read: ElementRef})
  courseImageElement: ElementRef;
  @ContentChild('imgComRef')
  imgComRef: CourseImageComponent;
  @ContentChild('imgComRef', {read: ElementRef})
  imgEleRef: ElementRef;

  @ContentChildren(CourseImageComponent)
  courseImageComponents: QueryList<CourseImageComponent>;
  @ContentChildren(CourseImageComponent, {read: ElementRef})
  courseImageElements: QueryList<ElementRef>;
  @ContentChildren('imgComRef')
  imgComRefs: QueryList<CourseImageComponent>;
  @ContentChildren('imgComRef', {read: ElementRef})
  imgEleRefs: QueryList<ElementRef>;


  @ContentChild('courseDesc')
  courseDesc;

  constructor() { }

  ngAfterContentInit() {
    // console.log(this.courseImageComponent);
    // console.log(this.courseImageElement);
    // console.log(this.imgComRef);
    // console.log(this.imgEleRef);

    // console.log(this.courseImageComponents);
    // console.log(this.courseImageElements);
    // console.log(this.imgComRefs);
    // console.log(this.imgEleRefs);

    // console.log(this.courseDesc);
  }

  onSaveClicked(description: string) {
    this.courseChanged.emit({...this.course, description});
  }

  onCourseViewed() {
    console.log('card component - button clicked ....');
    this.courseSelected.emit(this.course);
  }

  cardClasses() {
    if (this.course.category === 'BEGINNER') {
      return ['beginner'];
    }
  }

  cardStyles() {
    return {
      // 'background-image': 'url(' + this.course.iconUrls + ')'
    };
  }

}
