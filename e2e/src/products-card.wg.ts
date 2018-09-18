import {by, element, ElementArrayFinder} from 'protractor';


export class ProductsCardWidget {
  public cards: ElementArrayFinder;

  public constructor() {
    this.cards = element.all(by.css('course-card'));
  }
}
