import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-specialties',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.scss']
})
export class SpecialtiesComponent {
  specialties = [
    {
      name: 'Direito Civil',
      description: 'Descrição sobre direito civil.',
      image: 'assets/civ.png'
    },
    {
      name: 'Direito Criminal',
      description: 'Descrição sobre direito criminal.',
      image: 'assets/crim.png'
    },
    {
      name: 'Direito de Família',
      description: 'Descrição sobre direito de família.',
      image: 'assets/fam.png'
    },
    {
      name: 'Direito Previdenciário',
      description: 'Descrição sobre direito previdenciário.',
      image: 'assets/prev.png'
    }
  ];
}
