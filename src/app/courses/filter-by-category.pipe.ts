import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../model/course';

@Pipe({
  name: 'filterByCategory',
  pure: true // Default is true
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(courses: Course[], category: string) {
    console.log('Called transform');
    return courses.filter(course => course.category === category);
  }
}
