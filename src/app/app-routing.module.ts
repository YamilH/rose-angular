import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { FaqComponent } from './faq/faq.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { CoursesComponent } from './courses/courses.component';
import { PiercingComponent } from './piercing/piercing.component';
import { PartsComponent } from './parts/parts.component';
import { DownsizesComponent } from './downsizes/downsizes.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'piercing',
        component: PiercingComponent,
      },
      {
        path: 'parts',
        component: PartsComponent,
      },
      {
        path: 'downsizes',
        component: DownsizesComponent,
      },
      {
        path: 'consultation',
        component: ConsultationComponent,
      },
      {
        path: 'courses',
        component: CoursesComponent,
      },
      {
        path: 'faq',
        component: FaqComponent,
      },
      {
        path: '404',
        component: ErrorComponent,
      },
      {
        path: '**',
        redirectTo: '404',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
