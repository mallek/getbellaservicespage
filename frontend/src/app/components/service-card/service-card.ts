import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './service-card.html',
  styleUrl: './service-card.css'
})
export class ServiceCard {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() link: string = '';
  @Output() cardClick = new EventEmitter<string>();

  onCardClick() {
    this.cardClick.emit(this.title);
  }
}
