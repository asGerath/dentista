import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-always-lough',
  imports: [CommonModule],
  templateUrl: './always-lough.html',
  styleUrl: './always-lough.css'
})
export class AlwaysLough {
  itemsList = [
    {text:'Check ups'},
    {text:'Cosmetic dentistry'},
    {text:'Orthodontics'},
    {text:'Preventative checks'},
    {text:'Emergencies'},
    {text:'Dental implants'},
    {text:'Children’s dentistry'},
    {text:'Telephone consultations'},
  ]
}
