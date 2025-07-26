import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the toolbar height to offset the scroll position
      const toolbar = document.querySelector('mat-toolbar') as HTMLElement;
      const toolbarHeight = toolbar ? toolbar.offsetHeight : 64;
      
      // Calculate the position accounting for the sticky toolbar
      const elementPosition = element.offsetTop - toolbarHeight;
      
      // Smooth scroll to the adjusted position
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }
}
