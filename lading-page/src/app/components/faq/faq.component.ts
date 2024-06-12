import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

  faqs = [
    {
      question: 'Qual é o seu horário de atendimento?',
      answer: 'Nosso horário de atendimento é de segunda a sexta, das 9h às 18h.',
      open: false
    },
    {
      question: 'Como posso marcar uma consulta?',
      answer: 'Você pode marcar uma consulta através do nosso site ou ligando para nosso telefone de contato.',
      open: false
    },
    {
      question: 'Quais são os serviços oferecidos?',
      answer: 'Oferecemos serviços de consultoria jurídica em diversas áreas do direito, como civil, criminal, família e previdenciário.',
      open: false
    }
  ];

  toggleFaq(faq: any) {
    faq.open = !faq.open;
  }

}
