import { Component, OnInit, Input } from '@angular/core';
import { RedSocialIcon } from 'src/app/interfaces/redSocialIcon';

@Component({
  selector: 'app-red-social',
  templateUrl: './red-social.component.html',
  styleUrls: ['./red-social.component.scss']
})
export class RedSocialComponent implements OnInit {

  @Input()redSocial:RedSocialIcon={
    nombre:'',
    icono:'',
    enlace:''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
