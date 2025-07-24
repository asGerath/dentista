import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})


export class Navbar {
  navItems = [
    { label: 'Home', target: '#' },
    { label: 'Services', target: '#' },
    { label: 'About us', target: '#' },
    { label: 'Register', target: '#' }
  ];

  ctaButton = {
    label: 'Appoinment',
    target: '#'
  };
}
