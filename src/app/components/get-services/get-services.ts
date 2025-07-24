import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-services',
  imports: [CommonModule],
  templateUrl: './get-services.html',
  styleUrl: './get-services.css'
})
export class GetServices {
  servicesItems = [
    { icon:'/Call.png', text:'Call for<br> appointment'},
    { icon:'/Date.png', text:'Get a <br>Date & Serial'},
    { icon:'/More.png', text:'Consul<br> Your dentist'}
  ]
}
