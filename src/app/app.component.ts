import { Component } from '@angular/core';
import { ApiConsumerComponent } from "./_components/api-consumer/api-consumer.component";

@Component({
  selector: 'app-root',
  imports: [ApiConsumerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-binary-rain-loader';
}
