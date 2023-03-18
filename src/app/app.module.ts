import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './shared/shared.module';


const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: 'https://nativos-tierra.up.railway.app'// it is recommended to set your domain, for cookies to work properly
  },
  position:"bottom",
  palette: {
    popup: {
      background: '#DC4D0C',
      text:'#0a0a0a'

    },
    button: {
      background: '#9D8B3D',
      text:'#f0f0f0'
    }
  },
  theme: 'edgeless',
  "type": "info",
  layout: 'my-custom-layout',
  layouts: {
    "my-custom-layout": '{{messagelink}}{{compliance}}'
  },
  elements:{
    messagelink: `
    <span id="cookieconsent:desc" class="cc-message">{{message}} 
      <a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="{{cookiePolicyHref}}" target="_blank" rel="noopener">{{cookiePolicyLink}}</a>, 
      <a aria-label="learn more about our privacy policy" tabindex="1" class="cc-link" href="{{privacyPolicyHref}}" target="_blank" rel="noopener">{{privacyPolicyLink}}</a> y nuestro
      <a aria-label="learn more about our terms of service" tabindex="2" class="cc-link" href="{{tosHref}}" target="_blank" rel="noopener">{{tosLink}}</a>
    </span>
    `,
  },
  content:{
    message: 'Este portal web únicamente utiliza cookies propias con finalidad técnica. No recaba ni cede datos personales de los usuarios sin su consentimiento.',
    
    cookiePolicyLink: 'Política de cookies',
    cookiePolicyHref: 'https://nativos-tierra.up.railway.app/cookies',

    privacyPolicyLink: 'Política de privacidad',
    privacyPolicyHref: 'https://nativos-tierra.up.railway.app/privacidad',

    tosLink: 'Aviso legal',
    tosHref: 'https://nativos-tierra.up.railway.app/legal',
  }
};


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    NgcCookieConsentModule.forRoot(cookieConfig),
    
    BrowserModule,
    AppRoutingModule,   
    HttpClientModule, 
    FontAwesomeModule,
    SharedModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
