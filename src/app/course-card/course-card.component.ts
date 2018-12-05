import { Component, Input, EventEmitter, Output, ContentChild, AfterViewInit, ElementRef, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements AfterViewInit, AfterContentInit {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseSelected = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent, {read: ElementRef})
  image: ElementRef;

  @ContentChildren(CourseImageComponent, {read: ElementRef})
  images: QueryList<ElementRef>;

  @ContentChild('courseDesc')
  courseDesc;

  constructor() { }

  ngAfterViewInit() {
    console.log(this.image);
    console.log(this.courseDesc);
  }

  ngAfterContentInit() {
    console.log(this.images);
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
      // 'background-image': 'url(' + this.course.iconUrl + ')'
    };
  }

}
