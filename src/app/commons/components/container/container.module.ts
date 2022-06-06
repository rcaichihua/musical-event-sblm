import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContainerComponent } from './container.component';

@NgModule({
	declarations: [ContainerComponent, HeaderComponent, FooterComponent],
	imports: [MatButtonModule],
	exports: [ContainerComponent]
})
export class ContainerModule {}
