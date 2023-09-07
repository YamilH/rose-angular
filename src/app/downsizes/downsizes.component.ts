import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-downsizes',
  templateUrl: './downsizes.component.html',
  styleUrls: ['./downsizes.component.scss']
})
export class DownsizesComponent {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Desplaza la página al principio (0, 0)
      }
    });
  }

}
