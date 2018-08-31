import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {CourseComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CardComponent} from './card/card.component';
import {ProductFilterPipe} from './common/pipes/product-filter.pipe';
import {TooltipDirective} from './common/directives/tooltip.directive';
import {ProductsService} from './common/services/products.service';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import {BASE_URL} from './constants';
console.log(BASE_URL);
@NgModule({
  declarations: [
    CourseComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ProductFilterPipe,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ProductsService,
    {provide: BASE_URL, useValue: environment.baseUrl},
    // {provide: 'BASE_URL', useValue: 'localhost:5555', multi: true},
  ],
  bootstrap: [CourseComponent]
})
export class AppModule {
}
