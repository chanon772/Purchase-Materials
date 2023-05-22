import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchasingService {

  url = 'https://pbp004.bp.minebea.local/api-test/purchase-materials/T3/71/DZ/ALL';
  post_url = 'https://pbp004.bp.minebea.local/api-test/purchase-materials' 

  add(place: string, division: string, opec: string, itemNo: string, itemName:string, onHand:number, mainWarehouse:string, mainLocation:string){
    console.log(place, division, opec, itemNo, itemName, onHand, mainWarehouse, mainLocation);
    return this.http.post(`${this.post_url}`, {place, division, opec, itemNo, itemName, onHand, mainWarehouse, mainLocation});
  }

  getAllPurchaseMaterials():Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }

  constructor(private http:HttpClient) { }
}
