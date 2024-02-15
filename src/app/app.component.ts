import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './common/nav/nav.component';
import { ViewAllCitizenComponent } from './page/view-all-citizen/view-all-citizen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,ViewAllCitizenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TAX-app';
}
