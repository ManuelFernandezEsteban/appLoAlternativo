import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  submitted:boolean=false;
  formNewsLetter= this.fb.group(
    {
      email:['',Validators.email]
    }
  )

  constructor(private fb:FormBuilder ) { }

  ngOnInit(): void {
  }
  public get email():boolean{
    return this.formNewsLetter.get('email')?.invalid||false;
  }

  onSubmit(){
    this.submitted=true;
    if (!this.formNewsLetter.valid){
      return;
    }
    console.log(this.formNewsLetter.value,this.formNewsLetter.valid);
    this.formNewsLetter.reset();
    this.submitted=false;
  }

}
