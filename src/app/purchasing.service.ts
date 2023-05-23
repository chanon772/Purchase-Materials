import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Purchasingmaterials } from './purchasingmaterials';

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

  getOnePurchaseMaterials(data:Purchasingmaterials){
    return this.http.get<any[]>(`${this.post_url}/${data.place}/${data.division}/${data.opec}/${data.itemNo}`);
  }

  delete(data:Purchasingmaterials){
    return this.http.delete(`${this.post_url}/${data.place}/${data.division}/${data.opec}/${data.itemNo}`);
  }

  update(data:Purchasingmaterials){
    return this.http.put(`${this.post_url}/${data.place}/${data.division}/${data.opec}/${data.itemNo}`, data);
  }

  search(data:Purchasingmaterials){
    return this.http.get<any[]>(`${this.post_url}/${data.place}/${data.division}/${data.opec}/${data.itemNo}`);
  }


  constructor(private http:HttpClient) { }
}
