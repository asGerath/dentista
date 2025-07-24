import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-key-feature',
  imports: [CommonModule],
  templateUrl: './key-feature.html',
  styleUrl: './key-feature.css'
})
export class KeyFeature {
  keyItems = [
    {img:"/01.webp", title:'Laser Technology', text:'Worlds most advanced Diode Laser. Your treatment experience will be relaxing & smooth.'},
    {img:"/02.webp", title:'Painless Injection', text:'Only dental clinic in New York, USA utilising Painless Injection system. You will be amazed!'},
    {img:"/03.webp", title:'Dental  Implant', text:'30+ years of experience in Dental Implant with specialist care. You will be able to chew properly again!'},
    {img:"/04.webp", title:'3D Dental Scanner ', text:'One of the world’s most advanced 3D Dental Scanner with auto scanning only one in New York!'},
    {img:"/05.webp", title:'Digital Smile Design', text:'We help to re-design your smile and shape your teeth to create a customised smile for your face!'},
    {img:"/06.webp", title:'Crown and Bridge', text:'Transform you blackish gum to pinkish colour with painless, single appointment Laser Gum Treatment'},
  ]
}
