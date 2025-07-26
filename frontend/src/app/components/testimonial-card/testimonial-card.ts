import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './testimonial-card.html',
  styleUrl: './testimonial-card.css'
})
export class TestimonialCard {
  @Input() photo: string = '';
  @Input() quote: string = '';
  @Input() author: string = '';
}
