import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RedSocialIcon } from 'src/app/interfaces/redSocialIcon';

@Component({
  selector: 'app-footer-especialistas',
  templateUrl: './footer-especialistas.component.html',
  styleUrls: ['./footer-especialistas.component.scss']
})
export class FooterEspecialistasComponent implements OnInit {

  caption:string='caption';

  instagram:RedSocialIcon={
    nombre:'Instagram',
    enlace:'https://www.instagram.com/nativostierra_/',
    icono:'../../../assets/images/icons-svg/instagram.svg'
  }
  facebook:RedSocialIcon={
    nombre:'Facebook',
    enlace:'https://www.facebook.com/100089059505165',
    icono:'../../../assets/images/icons-svg/facebook.svg'
  }
  youtube:RedSocialIcon={
    nombre:'YouTube',
    enlace:'https://www.youtube.com/channel/UCMzJ0PPoQhcKkNZvnyBc3gA',
    icono:'../../../assets/images/icons-svg/youtube.svg'
  }

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  scroll(){
    window.scrollTo(0,0);
  }
  irANewsletter(){
    this.route.navigate(['/newsletter']);
  }

}
