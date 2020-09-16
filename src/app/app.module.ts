import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ProductListComponent} from './product-list/product-list.component';
import {CommentComponent} from './product-list/product-details/comment/comment.component';
import {ProductDetailsComponent} from './product-list/product-details/product-details.component';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {AccountComponent} from './account/account.component';
import {SellComponent} from './sell/sell.component';
import {OrderComponent} from './product-list/product-details/order/order.component';
import {ProductService} from './services/product-service';
import {OrderService} from './services/order-service';
import { OrderConfirmedComponent } from './product-list/product-details/order-confirmed/order-confirmed.component';
import { ConfirmComponent } from './sell/confirm/confirm.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {AuthGuard} from './services/auth-guard';
import {MessageService} from './services/message-service';
import { CategoryComponent } from './category/category.component';
import {CategoryService} from './services/category-service';
import { PhotoGalleryComponent } from './account/photo-gallery/photo-gallery.component';
import {PhotoAlbumService} from './services/photo-album-service';
import { NgImageSliderModule } from 'ng-image-slider';
import { BoughtComponent } from './account/bought/bought.component';
import { SoldComponent } from './account/sold/sold.component';

const appRoutes: Routes = [
  {path: '', component: CategoryComponent},
  {path: 'kategoria/:category', component: ProductListComponent},
  {path: 'produkt/:title', component: ProductDetailsComponent},
  {path: 'produkt/zamowienie/:title/:price/:amount', component: OrderComponent},
  {path: 'produkt/zamowienie/:id', component: OrderConfirmedComponent},
  {path: 'sprzedaz', component: SellComponent ,  canActivate: [AuthGuard] },
  {path: 'sprzedaz/potwierdzenie/:title', component: ConfirmComponent, canActivate: [AuthGuard]},
  {path: 'konto/kupione', component: BoughtComponent, canActivate: [AuthGuard]},
  {path: 'konto/sprzedane', component: SoldComponent, canActivate: [AuthGuard]},
  {path: 'konto/galeria', component: PhotoGalleryComponent, canActivate: [AuthGuard]},
  {path: 'konto', component: AccountComponent, canActivate: [AuthGuard]},
  {path: 'kontakt', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    CommentComponent,
    ProductDetailsComponent,
    ContactComponent,
    AccountComponent,
    SellComponent,
    OrderComponent,
    OrderConfirmedComponent,
    ConfirmComponent,
    LoginComponent,
    LogoutComponent,
    CategoryComponent,
    PhotoGalleryComponent,
    BoughtComponent,
    SoldComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    NgImageSliderModule
  ],
  providers: [ProductService, OrderService, AuthGuard, MessageService, CategoryService, PhotoAlbumService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
