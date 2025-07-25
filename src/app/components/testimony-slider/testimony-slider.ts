import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-testimony-slider',
  imports: [CommonModule],
  templateUrl: './testimony-slider.html',
  styleUrl: './testimony-slider.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class TestimonySlider {
    testimonialItems = [
      {img:'/testimonial-1.webp', text:'I’ve seen a lot of Dentists over my lifetime because I’ve had some serious dental issues. But my highest praise goes to Dr. Jonathon Doe and his staffs . I was always very anxious going to the dentist but this time at Digital Implant, my experience was so painless and relaxed their was no discomfort whatsoever.'},
      {img:'/testimonial-1.webp', text:'I’ve seen a lot of Dentists over my lifetime because I’ve had some serious dental issues. But my highest praise goes to Dr. Jonathon Doe and his staffs . I was always very anxious going to the dentist but this time at Digital Implant, my experience was so painless and relaxed their was no discomfort whatsoever.'},
      {img:'/testimonial-1.webp', text:'I’ve seen a lot of Dentists over my lifetime because I’ve had some serious dental issues. But my highest praise goes to Dr. Jonathon Doe and his staffs . I was always very anxious going to the dentist but this time at Digital Implant, my experience was so painless and relaxed their was no discomfort whatsoever.'},
      {img:'/testimonial-1.webp', text:'I’ve seen a lot of Dentists over my lifetime because I’ve had some serious dental issues. But my highest praise goes to Dr. Jonathon Doe and his staffs . I was always very anxious going to the dentist but this time at Digital Implant, my experience was so painless and relaxed their was no discomfort whatsoever.'},
      {img:'/testimonial-1.webp', text:'I’ve seen a lot of Dentists over my lifetime because I’ve had some serious dental issues. But my highest praise goes to Dr. Jonathon Doe and his staffs . I was always very anxious going to the dentist but this time at Digital Implant, my experience was so painless and relaxed their was no discomfort whatsoever.'},
      {img:'/testimonial-1.webp', text:'I’ve seen a lot of Dentists over my lifetime because I’ve had some serious dental issues. But my highest praise goes to Dr. Jonathon Doe and his staffs . I was always very anxious going to the dentist but this time at Digital Implant, my experience was so painless and relaxed their was no discomfort whatsoever.'},
      {img:'/testimonial-1.webp', text:'I’ve seen a lot of Dentists over my lifetime because I’ve had some serious dental issues. But my highest praise goes to Dr. Jonathon Doe and his staffs . I was always very anxious going to the dentist but this time at Digital Implant, my experience was so painless and relaxed their was no discomfort whatsoever.'},
    ]
}
