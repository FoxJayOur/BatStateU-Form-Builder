import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-myforms',
  templateUrl: './myforms.page.html',
  styleUrls: ['./myforms.page.scss'],
})
export class MyformsPage implements OnInit {
  
  data1: any
  temptitleObj: any[]
  temptitleObj2: any[]
  temptitleObj3: any[]
  title1: string[] = []
  title2: string [] = []
  title3: string [] = []
  expiryDate1: string [] = []
  expiryDate2: string [] = []
  expiryDate3: string [] = []


  constructor(private http: HttpClient) {
    this.viewForms()
  }

  ngOnInit() {
  }

  viewForms() {
    this.http.get('https://formana.azurewebsites.net//api/formanaAuth/viewAll')
    .subscribe(req =>{
      localStorage.getItem('data')
      console.log(req)
      this.data1 = JSON.stringify(req)
      type ObjectKey = keyof typeof this.data1;
      const Key = 'formDataAll' as ObjectKey
      this.temptitleObj = req[Key]
      const Key1 = 'formData2All' as ObjectKey
      this.temptitleObj2 = req[Key1]
      const Key2 = 'formData3All' as ObjectKey
      this.temptitleObj3 = req[Key2]
      for (let i = 0; i < Object.keys(this.temptitleObj).length; i++) {
        console.log("Error")
        if (this.temptitleObj[i].title == null) {
          this.title1[i] = "Null"
        }
        else {
          this.title1[i] = this.temptitleObj[i].title
        }
        if (this.temptitleObj[i].expiryDate == null) {
          this.expiryDate1[i] = "Null"
        }
        else{
          this.expiryDate1[i] = this.temptitleObj[i].expiryDate
          console.log(this.title1[i])
        }
      }
      for (let i = 0; i < Object.keys(this.temptitleObj2).length; i++) {
        console.log("Error")
        if (this.temptitleObj2[i].title == null) {
          this.title2[i] = "Null"
        }
        else {
          this.title2[i] = this.temptitleObj2[i].title
        }
        if (this.temptitleObj2[i].expiryDate == null) {
          this.expiryDate2[i] = "Null"
        }
        else{
          
          this.expiryDate2[i] = this.temptitleObj2[i].expiryDate
          console.log(this.title2[i])
        }
      }
      for (let i = 0; i < Object.keys(this.temptitleObj3).length; i++) {
        console.log("Error")
        if (this.temptitleObj3[i].title == null) {
          this.title3[i] = "Null"
        }
        else {
          this.title3[i] = this.temptitleObj3[i].title
        }
        if (this.temptitleObj3[i].title == null) {
          this.expiryDate3[i] = "Null"
        }
        else{
          this.expiryDate3[i] = this.temptitleObj3[i].expiryDate
          console.log(this.title3[i])
        }
      }
      console.log(Object.keys(this.temptitleObj).length)
      console.log(this.temptitleObj[0].name)
    }, error =>{
       console.log(error)
    })
  }
}
