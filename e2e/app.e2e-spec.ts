import { CleverComboboxPage } from './app.po';

describe('clever-combobox App', () => {
  let page: CleverComboboxPage;

  beforeEach(() => {
    page = new CleverComboboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
