import { CohesityEaglePage } from './app.po';

describe('cohesity-eagle App', function() {
  let page: CohesityEaglePage;

  beforeEach(() => {
    page = new CohesityEaglePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
