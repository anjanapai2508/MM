import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AlertController} from 'ionic-angular';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(private Alert: AlertController,public navCtrl: NavController, public navParams: NavParams) {
     this.navCtrl = navCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  clickEvent(){
    let alert = this.Alert.create({
    title: 'YO!',
    subTitle: 'You like this pop up?',
    buttons: ['Hell Yeah!']
  });
  alert.present();
  }

}
