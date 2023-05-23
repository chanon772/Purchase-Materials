import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PurchasingService } from '../purchasing.service';
import { Purchasingmaterials } from '../purchasingmaterials';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  purchasingService = inject(PurchasingService);
  purchasematerials: Purchasingmaterials | undefined;

  product:Purchasingmaterials={
    place: '',
    division: '',
    opec: '',
    itemNo: '',
    itemName: '',
    onHand: 0,
    mainWarehouse: '',
    mainLocation: ''
  }

  submitted = false;

  Update(): void {
    this.purchasingService.update(this.product).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
      }
    );
  }

  constructor(private purchasingservice:PurchasingService, private router:Router){
    const place: string = this.route.snapshot.paramMap.get('place') ?? ''
    const division: string = this.route.snapshot.paramMap.get('division') ?? ''
    const opec: string = this.route.snapshot.paramMap.get('opec') ?? ''
    const itemNo: string = this.route.snapshot.paramMap.get('itemNo') ?? ''
    this.purchasingservice.getOnePurchaseMaterials({place, division, opec, itemNo, itemName:'', onHand:0, mainWarehouse:'', mainLocation:''
    }).subscribe
    (
        response => {
            console.log(response);
            this.submitted = true;
            this.product = response[0];
        },
        error => {
            console.log(error);
        }
    );
      
  }

}
