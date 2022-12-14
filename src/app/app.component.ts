import { Component } from '@angular/core';
import {Product} from '../app/models/product.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;

  onLoaded(img: string){
    console.log('Log Padre', img);
  }

  toggleImg(){
    this.showImg = !this.showImg;
  }
}
