import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuyPageComponent } from './pages/buy-page/buy-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { NotFoundPagesComponent } from './pages/not-found-pages/not-found-pages.component';
import { RecoveryPasswordPageComponent } from './pages/recovery-password-page/recovery-password-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RestorePasswordPageComponent } from './pages/restore-password-page/restore-password-page.component';
import { AccountChangePasswordPageComponent } from './pages/my-account/account-change-password-page/account-change-password-page.component';
import { MaintenanceBuyPageComponent } from './pages/maintenance/maintenance-buy-page/maintenance-buy-page.component';
import { MaintenanceEventsPageComponent } from './pages/maintenance/maintenance-events-page/maintenance-events-page.component';
import { MaintenanceReportsComponent } from './pages/maintenance/maintenance-reports/maintenance-reports.component';
import { CardEventComponent } from './commons/components/card-event/card-event.component';
import { CardMenusComponent } from './commons/components/card-menus/card-menus.component';
import { MatButtonModule } from '@angular/material/button';
import { ContainerModule } from './commons/components/container/container.module';
@NgModule({
	declarations: [
		AppComponent,
		BuyPageComponent,
		HomePageComponent,
		LoginPageComponent,
		MaintenanceComponent,
		MyAccountComponent,
		NotFoundPagesComponent,
		RecoveryPasswordPageComponent,
		RegisterPageComponent,
		RestorePasswordPageComponent,
		AccountChangePasswordPageComponent,
		MaintenanceBuyPageComponent,
		MaintenanceEventsPageComponent,
		MaintenanceReportsComponent,
		CardEventComponent,
		CardMenusComponent
	],
	imports: [BrowserModule, BrowserAnimationsModule,MatButtonModule,ContainerModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
