import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,} from '@angular/router';
import { PurchaseComponent } from './purchase/purchase.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PurchaseComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Purchase-Materials';
}
