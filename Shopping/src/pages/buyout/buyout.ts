import {Component, OnInit} from '@angular/core';
import { NavParams } from "ionic-angular";

@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html'
})
export class BuyoutPage implements OnInit {
  productData: { name: string, quantity: number}
 constructor (private navParams: NavParams){
 }

 ngOnInit(){
    this.productData = this.navParams.data;
 }

}
