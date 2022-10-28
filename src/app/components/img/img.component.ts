import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = 'https://www.w3schools.com/howto/img_avatar.png';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = '../../../assets/default.png'
  constructor() { }

  ngOnInit(): void {
  }
  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log("Log Hijo");
    this.loaded.emit(this.img);
  }
}
