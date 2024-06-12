import { Component } from '@angular/core';

@Component({
  selector: 'app-calltoaction',
  standalone: true,
  imports: [],
  templateUrl: './calltoaction.component.html',
  styleUrl: './calltoaction.component.scss'
})
export class CalltoactionComponent {

  constructor() { }

  redirectToWhatsApp() {

    window.open('https://api.whatsapp.com/message/IHLMPRSAEDXAD1?autoload=1&app_absent=0', '_blank');
  }
}
