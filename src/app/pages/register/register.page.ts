import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name: string
  email: string
  password: string
  srcode: number
  isAdmin: boolean = false
  department: string
  deptName: string
  program: string
  progName: string

  constructor(private http: HttpClient, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }
  
  register(){
    let user = {
      name: this.name,
      email: this.email,
      password: this.password,
      srcode: this.srcode,
      isAdmin: this.isAdmin,
      department: {
        deptName: this.deptName,
        program: {
          progName: this.progName
        }
      }
    }
    this.http.post('http://localhost:8080/api/formanaAuth/register', user)
    .subscribe(res =>{
      localStorage.setItem('user', JSON.stringify(res))
      this.router.navigateByUrl('/login', {replaceUrl: true})
      console.log(res)
    }, error =>{
      console.log(error)
      this.presentAlert('Register Failed', 'Wrong information filled out')
    })

    console.log(user)
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
