import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stripe-checkout',
  templateUrl: './stripe-checkout.component.html',
  styleUrls: ['./stripe-checkout.component.scss']
})
export class StripeCheckoutComponent implements OnInit {

  loading:boolean=false;
  constructor() { }

  ngOnInit(): void {
    this.loading=true;
  }

}
