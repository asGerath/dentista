import { NgClass } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  @Input() label: string = '';
  @Input() href: string = '';
  @Input() variant: 'primary' | 'secondary' = 'primary';
}
