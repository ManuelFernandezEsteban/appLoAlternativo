import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { NewsletterService } from '../../../services/newsletter.service';


@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  submitted: boolean = false;

  formNewsletter = this.fb.group(
    {
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      privacidad: [false, Validators.requiredTrue],
    }
  );

  constructor(private fb: FormBuilder, private newsletterService: NewsletterService) { }

  ngOnInit(): void {
  }
  campoValido(campo: string): boolean {
    return this.submitted && this.formNewsletter.get(campo).invalid;
  }

  onSubmit() {
    this.submitted = true;

    if (this.formNewsletter.valid && this.submitted) {
      this.submitted = false;
      //enviar lo datos a la base de datos y alli enviar un correo
      this.newsletterService.postUser(this.formNewsletter.value).subscribe((res) => {

        Swal.fire("Suscrito", "Te has suscrito correctamente", "success");

        //todo abrir pestaña con la revista

        this.formNewsletter.reset();
      }, (err:HttpErrorResponse) => {
        console.log(err.error.errors.errors[0].msg)
        Swal.fire("Error",err.error.errors.errors[0].msg || 'Error' , "error");
      });

    }
    else {
      return;
    }
  }
}
