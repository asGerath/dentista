import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { GetServices } from '../../components/get-services/get-services';
import { AlwaysLough } from '../../components/always-lough/always-lough';
import { KeyFeature } from '../../components/key-feature/key-feature';
import { YourSmile } from '../../components/your-smile/your-smile';
import { OurHistory } from '../../components/our-history/our-history';

@Component({
  selector: 'app-home',
  imports: [Hero, GetServices, AlwaysLough, KeyFeature, YourSmile, OurHistory],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
