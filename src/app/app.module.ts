import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { DownsizesComponent } from './downsizes/downsizes.component';
import { PartsComponent } from './parts/parts.component';
import { PiercingComponent } from './piercing/piercing.component';
import { FooterComponent } from './footer/footer.component';

import { CdkAccordionModule } from '@angular/cdk/accordion';
import { register} from 'swiper/element/bundle';

register()

@NgModule({
  declarations: [
    AppComponent,
    AppNavigationComponent,
    AboutComponent,
    ErrorComponent,
    FaqComponent,
    HomeComponent,
    CoursesComponent,
    ConsultationComponent,
    DownsizesComponent,
    // PartsComponent,
    PiercingComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    CdkAccordionModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
