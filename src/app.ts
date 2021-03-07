import {PLATFORM} from 'aurelia-pal';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'STJJ.AIC';
    config.map([
      {
        route: [''],
        name: 'search',
        moduleId: PLATFORM.moduleName('./search/search'),
        nav: true,
        title: 'カード検索'
      },
      {
        route: ['credits'],
        name: 'credits',
        moduleId: PLATFORM.moduleName('./credits/credits'),
        nav: true,
        title: 'クレジット'
      },
    ]);

    this.router = router;
  }
}
