import {SearchWidget} from './search.wg';
import {ProductsCardWidget} from './products-card.wg';
import {browser} from 'protractor';
import * as fs from 'fs';

function screen(name: string) {
  browser.takeScreenshot()
    .then((png: string) => {
      const stream: fs.WriteStream = fs.createWriteStream(`./${name}.png`);
      stream.write(new Buffer(png, 'base64'));
      stream.end();
    });
}


describe('workspace-project App', () => {
  const searchWidget: SearchWidget = new SearchWidget();
  const productsCardWidget: ProductsCardWidget = new ProductsCardWidget();

  beforeEach(() => {
    browser.get('/');
    browser.waitForAngular();
  });

  it('should search by term', () => {
    searchWidget.search('asdasdasd');
    // expect(productsCardWidget.cards.count()).toEqual(0);
    screen('inital-screen');
    // expect(searchWidget.searchInput).toBeTruthy();
    // searchWidget.search('asdasdasd');
    browser.sleep(5000);
    //expect(productsCardWidget.cards.count()).toEqual(10);
  });
});
