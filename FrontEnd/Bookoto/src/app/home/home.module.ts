import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from '../components/header/header.component';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MainContentComponent } from '../components/main-content/main-content.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ContentDetailsComponent } from '../components/content-details/content-details.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    HomepageComponent,
    HeaderComponent,
    CarouselComponent,
    MainContentComponent,
    FooterComponent,
    ContentDetailsComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlickCarouselModule,
    MaterialModule

  ]
})
export class HomeModule { }
