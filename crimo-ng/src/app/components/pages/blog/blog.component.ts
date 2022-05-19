import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
    lista: string[] = ['', '', '', '', '',  '', '', ''];
    numPage = 1;
    numElements = 6;
    indexInicial = 0;
    indexFinal = 6;
    pageSlice = this.lista.slice(0, 6);
    maxpage = 2;
    constructor() { }

  ngOnInit() {
  }
  OnPageChange(event: number){
        this.numPage = event;
        this.indexInicial = (this.numPage - 1) + (this.numElements - 1) * (this.numPage - 1);
        this.indexFinal = this.indexInicial + this.numElements;
        this.pageSlice = this.lista.slice(this.indexInicial, this.indexFinal);
  }
  onNextPage(){
      if (this.numPage < this.maxpage){
          this.numPage = this.numPage + 1;
          this.OnPageChange(this.numPage);
      }
   }
  onPrevPage(){
      if (this.numPage > 1){
          this.numPage = this.numPage - 1;
          this.OnPageChange(this.numPage);
      }
  }
}
