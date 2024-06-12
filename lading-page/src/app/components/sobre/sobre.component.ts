import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent {
  info = {
    title: 'Sobre mim',
    description: 'Nossa empresa é dedicada a fornecer os melhores serviços aos nossos clientes. Com uma parceria altamente qualificada e experiente, estamos prontos para atender todas as suas necessidades.',
    image: 'assets/sobre.jpg', // Substitua pelo caminho da imagem
    details: [
      
      'Equipe profissional e dedicada',
      'Compromisso com a satisfação do cliente',
      'Soluções inovadoras e personalizadas'
    ]
  };
}
