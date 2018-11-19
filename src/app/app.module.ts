import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingPage } from '../pages/setting/setting';
import { ProfilePage } from '../pages/profile/profile';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { TicketsPage } from '../pages/tickets/tickets';
import { RequisitionPage } from '../pages/requisition/requisition';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SettingPage,
    ProfilePage,
    RegisterPage,
    LoginPage,
    TicketsPage,
    RequisitionPage,
    

  ],
  imports: [
    FormsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SettingPage,
    ProfilePage,
    RegisterPage,
    LoginPage,
    TicketsPage,
    RequisitionPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
