import { Component } from '@angular/core';
import { faCoffee ,faList} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortfolioPriject';
  faCoffee=faCoffee;
  faList=faList;
}
