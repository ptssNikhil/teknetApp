import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { HttpClientModule } from "@angular/common/http";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";
import { DashboardPage } from "../pages/dashboard/dashboard";
import { TeklinePage } from "../pages/tekline/tekline";
import { TekblogPage } from "../pages/tekblog/tekblog";
import { TektubePage } from "../pages/tektube/tektube";
import { BaysideAssistantPage } from "../pages/bayside-assistant/bayside-assistant";
import { DashboardContentPage } from "../pages/dashboard-content/dashboard-content";
import { TekBlogChatPage } from "../pages/tek-blog-chat/tek-blog-chat";
import { AlertDeatailPage } from "../pages/alert-deatail/alert-deatail";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { DataServiceProvider } from "../providers/data-service/data-service";
import { DatePickerModule } from 'ion-datepicker';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DashboardPage,
    TeklinePage,
    TekblogPage,
    TektubePage,
    BaysideAssistantPage,
    DashboardContentPage,
    TekBlogChatPage,
    AlertDeatailPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), HttpClientModule,DatePickerModule],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DashboardPage,
    TeklinePage,
    TekblogPage,
    TektubePage,
    BaysideAssistantPage,
    DashboardContentPage,
    TekBlogChatPage,
    AlertDeatailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataServiceProvider
  ]
})
export class AppModule {}
