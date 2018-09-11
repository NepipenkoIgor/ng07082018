import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {CourseComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CardComponent} from './content/products/card/card.component';
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
import {CartComponent} from './header/cart/cart.component';
import {ProductComponent} from './header/cart/product/product.component';
import {ProductsComponent} from './content/products/products.component';
import {SignupComponent} from './content/signup/signup.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {OneProductComponent} from './content/products/one-product/one-product.component';
import {OneProductResolverService} from './content/products/one-product/one-product-resolver.service';
import {CustomPreloadService} from './common/services/custom-preload.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    ProductComponent,
    ProductsComponent,
    SignupComponent,
    OneProductComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ProductsEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadService})
  ],
  providers: [
    {provide: BASE_URL, useValue: environment.baseUrl},
    OneProductResolverService,
    CustomPreloadService
    // {provide: 'BASE_URL', useValue: 'localhost:5555', multi: true},
  ],
  bootstrap: [CourseComponent]
})
export class AppModule {
}
