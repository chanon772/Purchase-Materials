import { Routes } from "@angular/router";
import { PurchaseComponent } from "./purchase/purchase.component";
const routeConfig: Routes = [
    {
        path: '',
        component: PurchaseComponent,
        title: 'Angular'
    },
];

export default routeConfig;
