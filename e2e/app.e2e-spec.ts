import { WorkInProgressPage } from './app.po';

describe('work-in-progress App', () => {
  let page: WorkInProgressPage;

  beforeEach(() => {
    page = new WorkInProgressPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
