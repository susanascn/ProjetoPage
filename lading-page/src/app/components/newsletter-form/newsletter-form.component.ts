import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
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
      telefone: ['', [Validators.required, Validators.maxLength(11), this.phoneValidator]]
    });
  }

  checkMaxLength(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.value.length > 11) {
      input.value = input.value.slice(0, 11);
    }
  }

  phoneValidator(control: AbstractControl): ValidationErrors | null {
    const valid = /^\d{0,11}$/.test(control.value);
    return valid ? null : { invalidPhone: true };
  }

  onSubmit(): void {
    if (this.newsletterForm.valid) {
      const nome = this.newsletterForm.get('nome')?.value;
      const telefone = this.newsletterForm.get('telefone')?.value;
      this.loading = true;
      this.newsletterService.sendData(nome, telefone).subscribe(
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
