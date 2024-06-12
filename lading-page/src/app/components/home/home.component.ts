import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DiferenciaisComponent } from '../diferenciais/diferenciais.component';
import { SobreComponent } from '../sobre/sobre.component';
import { SpecialtiesComponent } from '../specialties/specialties.component';
import { AtendimentoComponent } from '../atendimento/atendimento.component';
import { CalltoactionComponent } from '../calltoaction/calltoaction.component';
import { FaqComponent } from '../faq/faq.component';
import { FooterComponent } from '../footer/footer.component';
import { NewsletterComponent } from '../newsletter-form/newsletter-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    DiferenciaisComponent,
    SobreComponent,
    SpecialtiesComponent,
    AtendimentoComponent,
    CalltoactionComponent,
    FaqComponent,
    FooterComponent,
    NewsletterComponent
  ]
})
export class HomeComponent {}
