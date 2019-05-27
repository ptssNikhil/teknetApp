import { Component, ViewChild } from "@angular/core";
import { Config, Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

// import { HomePage } from "../pages/home/home";
// import { ListPage } from "../pages/list/list";
// new page added
import { DashboardPage } from "../pages/dashboard/dashboard";
// import { TeklinePage } from "../pages/tekline/tekline";
// import { TekblogPage } from "../pages/tekblog/tekblog";
import { TektubePage } from "../pages/tektube/tektube";
import { BaysideAssistantPage } from "../pages/bayside-assistant/bayside-assistant";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = DashboardPage;

  pages: Array<{ title: string; menuIcon: string; component: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public config: Config
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Home', component: HomePage },
      // { title: 'List', component: ListPage },
      // { title: 'Dashboard', component: DashboardPage },
      // { title: 'TEKLine', component: TeklinePage },
      // { title: 'TEKBlog', component: TekblogPage },
      // { title: 'TEKTube', component: TektubePage },
      // { title: 'Bayside Assistant', component: BaysideAssistantPage },
      { title: "Home", menuIcon: "home", component: DashboardPage },
      { title: "My Profile", menuIcon: "contact", component: DashboardPage },
      {
        title: "About us",
        menuIcon: "information-circle",
        component: TektubePage
      },
      { title: "Logout", menuIcon: "log-out", component: BaysideAssistantPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.config.set("backButtonIcon", "ios-arrow-back");
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(page.component);
  }
}
