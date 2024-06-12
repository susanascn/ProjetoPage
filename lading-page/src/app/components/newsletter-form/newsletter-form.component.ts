import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NewsletterService } from '../../services/newsletter.service';

@Component({
  selector: 'app-newsletter-form',
  templateUrl: './newsletter-form.component.html',
  styleUrls: ['./newsletter-form.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule]
})
export class NewsletterComponent {
  newsletterForm: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private newsletterService: NewsletterService) {
    this.newsletterForm = this.fb.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.newsletterForm.valid) {
      const formData = this.newsletterForm.value;
      console.log('Dados enviados:', formData);
      this.loading = true;
      this.newsletterService.sendData(formData).subscribe(
        response => {
          console.log('Formulário enviado com sucesso', response);
          this.loading = false;
        },
        error => {
          console.error('Erro ao enviar formulário', error);
          this.loading = false;
        }
      );
    }
  }  
}