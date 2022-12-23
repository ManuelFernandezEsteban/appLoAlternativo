import { Component, Input, OnInit } from '@angular/core';
import { InfoModal } from 'src/app/interfaces/infoModal';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent implements OnInit {
  @Input()info!:InfoModal;
  constructor() { }

  ngOnInit(): void {
  }

}
