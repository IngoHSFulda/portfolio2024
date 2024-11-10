import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Updated to use styleUrls as an array
})
export class AppComponent {
  title = 'my-interface';

  // Dynamic year based on the current date
  currentYear: number = new Date().getFullYear();
}
