import { TicTacToeApplicationPage } from './app.po';

describe('tic-tac-toe-application App', function() {
  let page: TicTacToeApplicationPage;

  beforeEach(() => {
    page = new TicTacToeApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
