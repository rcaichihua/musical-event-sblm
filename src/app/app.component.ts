import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
	title = 'musical-event';
	constructor() {
		console.log('-constructor---');
		this.title = 'MitoCode';
	}
  	ngOnInit(): void {
		console.log('---ngOnInit---');
	}

	ngAfterViewInit(): void {
		console.log('---ngAfterViewInit---');
	}
}
