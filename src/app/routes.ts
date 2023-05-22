import { Routes } from "@angular/router";
import { PurchaseComponent } from "./purchase/purchase.component";
import { EditComponent } from "./edit/edit.component";
const routeConfig: Routes = [
    {
        path: '',
        component: PurchaseComponent,
        title: 'Angular'
    },
     {
        path: 'edit/:place/:division/:opec/:itemNo',
        component: EditComponent,
        title: 'Edit Details'
    }
];

export default routeConfig;
