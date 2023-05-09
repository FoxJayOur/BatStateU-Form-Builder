import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-viewforms',
  templateUrl: './viewforms.page.html',
  styleUrls: ['./viewforms.page.scss'],
})
export class ViewformsPage implements OnInit {

  title: string
  wtitle: string

  constructor(private http: HttpClient, private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
    
  }
  
  viewForms() {
    this.http.get('https://formana.azurewebsites.net//api/formanaAuth/ListOfForms')
    .subscribe(req =>{
      localStorage.getItem('data')
      console.log(req)
    }, error =>{
       console.log(error)
    })
  }

  findTitle(): string {
    let titleCreds = {
      wtitle: this.wtitle
    }

    this.http.post('https://formana.azurewebsites.net//api/formanaAuth/title', titleCreds)
    .subscribe(res => {
      localStorage.setItem('data', JSON.stringify(res))
      this.presentAlert('Form Exists', 'Proceed to answer form')
      console.log(res)
    }, error => {
       console.log(error)
    })

    return this.wtitle
  }
  findTitle2(): string {
    let titleCreds = {
      wtitle: this.wtitle
    }

    this.http.post('https://formana.azurewebsites.net//api/formanaAuth/title2', titleCreds)
    .subscribe(res => {
      localStorage.setItem('data2', JSON.stringify(res))
      this.presentAlert('Form Exists', 'Proceed to answer form')
      console.log(res)
    }, error => {
       console.log(error)
    })

    return this.wtitle
  }
  findTitle3(): string {
    let titleCreds = {
      wtitle: this.wtitle
    }

    this.http.post('https://formana.azurewebsites.net//api/formanaAuth/title3', titleCreds)
    .subscribe(res => {
      localStorage.setItem('data3', JSON.stringify(res))
      this.presentAlert('Form Exists', 'Proceed to answer form')
      console.log(res)
    }, error => {
       console.log(error)
    })

    return this.wtitle
  }

  viewTitle(): string {

    this.http.get('https://formana.azurewebsites.net//api/formanaAuth/title')
    .subscribe(req =>{
      localStorage.getItem('data')
      this.title = req.toString()
      console.log(this.title)
    }, error =>{
       console.log(error)
       console.log("oo nag error")
    })
    return this.title
  }
  myGeeks() {
    this.findTitle()
    document.getElementById('GFG').innerHTML
        = this.wtitle;
  }
  viewQuestions() {
    this.http.get('https://formana.azurewebsites.net//api/formanaAuth/ListOfForms')
    .subscribe(req =>{
      localStorage.setItem('data', JSON.stringify(req))
      console.log(req)
    }, error =>{
       console.log(error)
    })
  }
  viewComments() {
    this.http.get('https://formana.azurewebsites.net//api/formanaAuth/ListOfForms')
    .subscribe(req =>{
      localStorage.setItem('data', JSON.stringify(req))
      console.log(req)
    }, error =>{
       console.log(error)
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
