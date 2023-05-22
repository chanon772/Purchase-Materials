import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Purchasingmaterials } from '../purchasingmaterials';

@Component({
  selector: 'app-purchasing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './purchasing.component.html',
  styleUrls: ['./purchasing.component.css']
})
export class PurchasingComponent {
  
 @Input() purchasing!: Purchasingmaterials
}
