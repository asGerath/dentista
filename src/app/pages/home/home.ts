import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { GetServices } from '../../components/get-services/get-services';
import { AlwaysLough } from '../../components/always-lough/always-lough';
import { KeyFeature } from '../../components/key-feature/key-feature';
import { YourSmile } from '../../components/your-smile/your-smile';
import { OurHistory } from '../../components/our-history/our-history';
import { DoctorListComponent } from '../../components/meet-doctors/meet-doctors';
import { TestimonySlider } from '../../components/testimony-slider/testimony-slider';
import { CitaFormComponent } from '../../components/cita-form/cita-form';
import { NewsletterFormComponent } from '../../components/news-form/news-form';

@Component({
  selector: 'app-home',
  imports: [Hero, GetServices, 
            AlwaysLough, KeyFeature, 
            YourSmile, OurHistory, 
            DoctorListComponent,TestimonySlider,
            CitaFormComponent, NewsletterFormComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'  
})
export class Home {

}
