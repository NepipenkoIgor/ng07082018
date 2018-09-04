import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {CourseComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CardComponent} from './card/card.component';
import {ProductFilterPipe} from './common/pipes/product-filter.pipe';
import {TooltipDirective} from './common/directives/tooltip.directive';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import {BASE_URL} from './constants';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {ProductsEffects} from './store/effects/products.effect';
import {reducers} from './store';
import { CartComponent } from './header/cart/cart.component';
import { ProductComponent } from './header/cart/product/product.component';

console.log(BASE_URL);

@NgModule({
  declarations: [
    CourseComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ProductFilterPipe,
    TooltipDirective,
    CartComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ProductsEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    {provide: BASE_URL, useValue: environment.baseUrl},
    // {provide: 'BASE_URL', useValue: 'localhost:5555', multi: true},
  ],
  bootstrap: [CourseComponent]
})
export class AppModule {
}
