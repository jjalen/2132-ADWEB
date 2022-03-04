import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes = [{path: 'about', component:AboutComponent},
                        {path: 'contact', component:ContactComponent},
                        {path: 'home', component:HomeComponent},
                        {path: 'products', component:ProductsComponent},
                        {path: 'product-details', component:ProductDetailsComponent},
                        {path: 'reactive', component:ReactiveComponent},
                        {path: 'inventory', component:InventoryComponent},
                        {path: 'client' , component:ClientComponent},
                        {path: '**', component:PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AboutComponent, ProductsComponent, ProductDetailsComponent, ContactComponent, InventoryComponent, ClientComponent, PagenotfoundComponent]

