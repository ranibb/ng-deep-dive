export const COURSES: any = [
  {
    id: 1,
    description: 'Angular core deep dive',
    // iconUrls: [
    //   'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
    //   'http://rani.co/images/sampledata/course-image-2.jpg',
    //   'http://rani.co/images/sampledata/course-image-3.jpg'
    // ],
    longDescription: 'A detailed walk-through of the most important part of Angular - the Core and Common modules',
    category: 'INTERMEDIATE',
    lessonsCount: 10
  },
  {
    id: 2,
    description: 'RxJs In Practice Course',
    iconUrls: [
      'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
      'http://rani.co/images/sampledata/course-image-2.jpg',
      'http://rani.co/images/sampledata/course-image-3.jpg'
    ],
    longDescription: 'Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples',
    category: 'BEGINNER',
    lessonsCount: 10
  },

  {
    id: 3,
    description: 'NgRx In Depth',
    longDescription: 'Learn the modern Ngrx Ecosystem, including Store, Effects, Router Store, Ngrx Entity, Dev Tools and Schematics.',
    iconUrls: [
      'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-ngrx-course.png',
      'http://rani.co/images/sampledata/course-image-2.jpg',
      'http://rani.co/images/sampledata/course-image-3.jpg'
    ],
    category: 'ADVANCED'
  },

  {
    id: 4,
    description: 'Angular for Beginners',
    iconUrls: [
      'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png',
      'http://rani.co/images/sampledata/course-image-2.jpg',
      'http://rani.co/images/sampledata/course-image-3.jpg'
    ],
    longDescription: 'Establish a solid layer of fundamentals, learn what\'s under the hood of Angular',
    category: 'BEGINNER',
    lessonsCount: 10
  },
  {
    id: 5,
    description: 'Angular Security Course',
    longDescription: 'Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.',
    iconUrls: [
      'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
      'http://rani.co/images/sampledata/course-image-2.jpg',
      'http://rani.co/images/sampledata/course-image-3.jpg'
    ],
    category: 'ADVANCED',
    lessonsCount: 11
  },
  {
    id: 6,
    description: 'Angular PWA Course',
    longDescription: '<p class=\'course-description\'>Learn Angular Progressive Web Applications, build the future of the Web Today.',
    iconUrls: [
      'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png',
      'http://rani.co/images/sampledata/course-image-2.jpg',
      'http://rani.co/images/sampledata/course-image-3.jpg'
    ],
    category: 'ADVANCED',
    lessonsCount: 8
  },
  {
    id: 7,
    description: 'Angular Advanced Course',
    longDescription: 'Learn Advanced Angular functionality typically used in Library Development. Advanced Components, Directives, Testing, Npm',
    iconUrls: [
      'https://angular-academy.s3.amazonaws.com/thumbnails/advanced_angular-small-v3.png',
      'http://rani.co/images/sampledata/course-image-2.jpg',
      'http://rani.co/images/sampledata/course-image-3.jpg'
    ],
    category: 'ADVANCED'
  },
  {
    id: 8,
    description: 'Complete Typescript Course',
    longDescription: 'Complete Guide to Typescript From Scratch: Learn the language in-depth and use it to build a Node REST API.',
    iconUrls: [
      'https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-small.png',
      'http://rani.co/images/sampledata/course-image-2.jpg',
      'http://rani.co/images/sampledata/course-image-3.jpg'
    ],
    category: 'BEGINNER'
  },
  {
    id: 9,
    description: 'Angular Architecture Course',
    longDescription: 'Learn the core RxJs Observable Pattern as well and many other Design Patterns for building Reactive Angular Applications.',
    iconUrls: [
      'https://s3-us-west-1.amazonaws.com/angular-academy/blog/images/rxjs-reactive-patterns-small.png',
      'http://rani.co/images/sampledata/course-image-2.jpg',
      'http://rani.co/images/sampledata/course-image-3.jpg'
    ],
    category: 'BEGINNER'
  },
  {
    id: 10,
    description: 'Angular Material Course',
    iconUrls: [
      'https://s3-us-west-1.amazonaws.com/angular-university/course-images/material_design.png',
      'http://rani.co/images/sampledata/course-image-2.jpg',
      'http://rani.co/images/sampledata/course-image-3.jpg'
    ],
    longDescription: 'Build Applications with the official Angular Widget Library',
    category: 'ADVANCED'
  }
];


export function findCourseById(courseId: number) {
  // tslint:disable-next-line:triple-equals
  return COURSES.find(course => course.id == courseId);
}
