import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string
  password:string
  isLoading:boolean = false
  accessToken:object
  constructor(private http: HttpClient, private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  login(){
    let credentials = {
      email: this.email,
      password: this.password
    }
    this.http.post('https://formana.azurewebsites.net//api/formanaAuth/login', credentials)
    .subscribe(res =>{
      localStorage.setItem('user', JSON.stringify(res))
      this.router.navigateByUrl('/news', {replaceUrl: true})
      console.log(res)
      this.accessToken = res
      console.log(this.accessToken)
    }, error =>{
      this.isLoading = false
      this.presentAlert('Login Failed', 'Wrong credentials')
    })
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();

    const { role } = await alert.onDidDismiss();
    
  }
}
