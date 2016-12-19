import { RedditAppPage } from './app.po';

describe('reddit-app App', function() {
  let page: RedditAppPage;

  beforeEach(() => {
    page = new RedditAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
