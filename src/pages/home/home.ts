import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

    let  val:any = parseInt("50");
 //var $circle = document.getElementById("bar").getAttribute('r');
 if (isNaN(val)) {
  val = 100;
 }
 else{
   let r:any = document.getElementById("bar").getAttribute('r');
   var c = Math.PI*(r*2);

   if (val < 0) { val = 0;}
   if (val > 100) { val = 100;}

   var pct = ((100-val)/100)*c;

   //$circle.css({ strokeDashoffset: pct});

   document.getElementById("cont").setAttribute("data-pct",val)
 }

  }

}
