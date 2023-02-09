import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() numItems:number=0;
  @Input() page:number=0;
  @Input() totalPages:number=0;
  @Output() paginaEmiter:EventEmitter<number>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  anterior(){

    this.page--;
    this.pasarPagina();

  }

  siguiente(){

    this.page++;
    this.pasarPagina()

  }

  pasarPagina(){
    this.paginaEmiter.emit(this.page);
  }

}
