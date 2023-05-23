import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasingService } from '../purchasing.service';
import { PurchasingComponent } from '../purchasing/purchasing.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Purchasingmaterials } from '../purchasingmaterials';

@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [CommonModule, PurchasingComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {

  purchasingService: PurchasingService = inject(PurchasingService);
  purchasingList: Purchasingmaterials[] = [];

  product: Purchasingmaterials = {
    place: 'T3',
    division: '71',
    opec: 'DZ',
    itemNo: 'All',
    itemName: '',
    onHand: 0,
    mainWarehouse: '',
    mainLocation: ''
  }

  applyForm = new FormGroup({
    place: new FormControl(''),
    division: new FormControl(''),
    opec: new FormControl(''),
    itemNo: new FormControl(''),
    itemName: new FormControl(''),
    onHand: new FormControl(0),
    mainWarehouse: new FormControl(''),
    mainLocation: new FormControl('')
  });

  submitted = false;

  Submit() {
    this.purchasingService.add(
      this.applyForm.value.place ?? '',
      this.applyForm.value.division ?? '',
      this.applyForm.value.opec ?? '',
      this.applyForm.value.itemNo ?? '',
      this.applyForm.value.itemName ?? '',
      this.applyForm.value.onHand ?? 0,
      this.applyForm.value.mainWarehouse ?? '',
      this.applyForm.value.mainLocation ?? ''

    ).subscribe(
      response => {
        console.log(response);
        this.purchasingList.push({
          place: this.applyForm.value.place ?? '', division: this.applyForm.value.division ?? '', opec: this.applyForm.value.opec ?? '',
          itemNo: this.applyForm.value.itemNo ?? '', itemName: this.applyForm.value.itemName ?? '', onHand: this.applyForm.value.onHand ?? 0,
          mainWarehouse: this.applyForm.value.mainWarehouse ?? '', mainLocation: this.applyForm.value.mainLocation ?? ''
        });
        this.submitted = true;
        this.applyForm.reset();
      },

      error => {
        console.log(error);
      }
    );

  }

  onDelete(purchasing: Purchasingmaterials) {
    console.log(purchasing);
    if (purchasing == undefined) {
      return
    }
    const index = this.purchasingList.indexOf(purchasing);
    if (index > -1) {
      this.purchasingList.splice(index, 1);
    }
  }

  Search(): void {
    if (this.product.itemNo == ""){
      this.product.itemNo = "All";
    }
    this.purchasingService.search(this.product).subscribe((purchasingList: Purchasingmaterials[]) => {
      this.purchasingList = purchasingList;
    });
  }

  constructor() {
    // this.purchasingService.getAllPurchaseMaterials().subscribe((purchasingList: Purchasingmaterials[]) => {
    //   this.purchasingList = purchasingList;
    // });

    this.product.itemNo = "All";
    this.Search();
    
  }

  

}
