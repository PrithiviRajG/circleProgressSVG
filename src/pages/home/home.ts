import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {


  }

  ionViewDidLoad(){
    let  val:any = parseInt("50");
 let $circle = document.querySelector('#svg #bar');
 if (isNaN(val)) {
  val = 100;
 }
 else{
   let r: any = document.querySelector('#svg #bar').getAttribute('r').valueOf();
   //let r=90
   var c = Math.PI*(r*2);

   if (val < 0) { val = 0;}
   if (val > 100) { val = 100;}

   var pct = ((100-val)/100)*c;
   console.log(pct)

   //$circle.css({ strokeDashoffset: pct});
   document.getElementById("bar").style.strokeDashoffset =pct.toString();
   document.getElementById("cont").setAttribute("data-pct",val)

   //document.getElementById("cont").setAttribute("data-pct",val)
 }

  }

}
