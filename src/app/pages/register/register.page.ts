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
  code: number
  bodyTrial: string
  status: string
  message: string

  constructor(private http: HttpClient, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }
  
  getOTP() {
    this.presentAlert('OTP STATUS', "Please wait, OTP is being delivered to your electronic email! Stay with us!")

    let body = {
      email: this.email
    }

    this.http.post('http://localhost:8080/api/formanaAuth/formNotif', body).subscribe(res =>{
      localStorage.setItem('OTPVerify', JSON.stringify(res))
      console.log(res)
      this.bodyTrial = JSON.stringify(res)
      type ObjectKey = keyof typeof this.bodyTrial;
      const Key = 'status' as ObjectKey
      const Key2 = 'message' as ObjectKey
      console.log(res[Key])
      this.status = res[Key]
      this.message = res[Key2]
      this.presentAlert('OTP STATUS', (this.status + ": " + this.message))
    }, error =>{
      console.log(error)
      this.presentAlert('Register Failed', 'Wrong information filled out')
    })
    console.log("getOTP RAN")
    console.log(body)
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
