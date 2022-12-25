import { Component, OnInit } from '@angular/core';
import { RedSocialIcon } from 'src/app/interfaces/redSocialIcon';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  caption:string='caption';

  instagram:RedSocialIcon={
    nombre:'Instagram',
    enlace:'https://www.instagram.com/loalternativo_/',
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

  constructor() { }

  ngOnInit(): void {
  }
  scroll(){
    window.scrollTo(0,0);
  }

}
