import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-image',
  templateUrl: './course-image.component.html',
  styleUrls: ['./course-image.component.css']
})
export class CourseImageComponent implements OnInit {

  @Input('iconUrl')
  iconUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
