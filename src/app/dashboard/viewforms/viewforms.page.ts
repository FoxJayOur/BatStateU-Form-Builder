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
    this.http.get('http://localhost:8080/api/formanaAuth/ListOfForms')
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

    this.http.post('http://localhost:8080/api/formanaAuth/title', titleCreds)
    .subscribe(res => {
      localStorage.setItem('data', JSON.stringify(res))
      console.log(res)
    }, error => {
       console.log(error)
    })
    return this.wtitle
  }

  viewTitle(): string {

    this.http.get('http://localhost:8080/api/formanaAuth/title')
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
    this.http.get('http://localhost:8080/api/formanaAuth/ListOfForms')
    .subscribe(req =>{
      localStorage.setItem('data', JSON.stringify(req))
      console.log(req)
    }, error =>{
       console.log(error)
    })
  }
  viewComments() {
    this.http.get('http://localhost:8080/api/formanaAuth/ListOfForms')
    .subscribe(req =>{
      localStorage.setItem('data', JSON.stringify(req))
      console.log(req)
    }, error =>{
       console.log(error)
    })
  }
}
