import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [MatCardModule, RouterModule],
  templateUrl: './service-card.html',
  styleUrl: './service-card.css'
})
export class ServiceCard {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() link: string = '';
}
