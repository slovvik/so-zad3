import { SoZad3Page } from './app.po';

describe('so-zad3 App', () => {
  let page: SoZad3Page;

  beforeEach(() => {
    page = new SoZad3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
