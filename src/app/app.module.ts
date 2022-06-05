import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './commons/components/container/footer/footer.component';
import { HeaderComponent } from './commons/components/container/header/header.component';
import { ContainerComponent } from './commons/components/container/container.component';
import { BuyPageComponent } from './pages/buy-page/buy-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { NotFoundPagesComponent } from './pages/not-found-pages/not-found-pages.component';
import { RecoveryPasswordPageComponent } from './pages/recovery-password-page/recovery-password-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RestorePasswordPageComponent } from './pages/restore-password-page/restore-password-page.component';

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		HeaderComponent,
		ContainerComponent,
		BuyPageComponent,
		HomePageComponent,
		LoginPageComponent,
		MaintenanceComponent,
		MyAccountComponent,
		NotFoundPagesComponent,
		RecoveryPasswordPageComponent,
		RegisterPageComponent,
		RestorePasswordPageComponent
	],
	imports: [BrowserModule, BrowserAnimationsModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
