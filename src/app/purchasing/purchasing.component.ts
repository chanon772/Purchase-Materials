import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Purchasingmaterials } from '../purchasingmaterials';
import { RouterModule } from '@angular/router';
import { PurchasingService } from '../purchasing.service';

@Component({
  selector: 'app-purchasing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './purchasing.component.html',
  styleUrls: ['./purchasing.component.css']
})
export class PurchasingComponent {

  @Input() purchasing!: Purchasingmaterials
  @Output() result: EventEmitter<Purchasingmaterials> = new EventEmitter<Purchasingmaterials>()

  purchasingService = inject(PurchasingService);

  submitted = false;

  Delete(): void {
    this.purchasingService.delete(this.purchasing).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
        this.result.emit(this.purchasing)
      },
      error => {
        console.log(error);
      }
    );
  }

  constructor() { }

}
