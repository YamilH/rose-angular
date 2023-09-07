import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Desplaza la página al principio (0, 0)
      }
    });
  }
  
  // constructor() { }
  @ViewChild('scrollTarget') scrollTarget!: ElementRef;
  @ViewChild('button') button!: ElementRef;
  
  scrollToTarget() {
    const targetElement = this.scrollTarget.nativeElement;
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
