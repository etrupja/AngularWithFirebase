import { ProplistingsPage } from './app.po';

describe('proplistings App', () => {
  let page: ProplistingsPage;

  beforeEach(() => {
    page = new ProplistingsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
