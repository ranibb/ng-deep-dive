import { Component, Input, EventEmitter, Output, ContentChild, AfterViewInit, ElementRef } from '@angular/core';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements AfterViewInit {

  @Input()
  course: Course;

  @Output('courseSelected')
  courseSelected = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent, {read: ElementRef})
  image: ElementRef;

  @ContentChild('courseDesc')
  courseDesc;

  constructor() { }

  ngAfterViewInit() {
    console.log(this.image);
    console.log(this.courseDesc);
  }

  onCourseViewed() {
    console.log('card component - button clicked ....');
    this.courseSelected.emit(this.course);
  }

}
