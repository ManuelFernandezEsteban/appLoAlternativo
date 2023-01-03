import { Component, Input, OnInit } from '@angular/core';
import { Sponsor } from '../../../interfaces/sponsors';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.scss']
})
export class SponsorComponent implements OnInit {

  @Input () sponsor:Sponsor={
    id: 0,
    mombre: '',
    imagen: '',
    url: ''
  };

  @Input()clase:string='';

  constructor() { }

  ngOnInit(): void {
  
  }

}
