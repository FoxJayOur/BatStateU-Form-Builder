import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-formbuild',
  templateUrl: './formbuild.page.html',
  styleUrls: ['./formbuild.page.scss'],
})
export class FormbuildPage implements OnInit {
  msg: String
  msgs: string

  data = {
    questions: [
      {
        question: "",
        comments: [
          {
            comment: "",
          }
        ]
      }
    ],
    questions2: [
      {
        question: "",
        comments: [
          {
            comment: "",
          }
        ],
        comments2:  [
          {
            comment: "",
          }
        ]
      }
    ],
    questions3: [
      {
        question: "",
        comments: [
          {
            comment: "",
          }
        ]
      }
    ]
  }

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private alertController: AlertController) {
    this.myForm = this.fb.group({
      title: [''],
      description: [''],
      expiryDate: Date,
      questions: this.fb.array([]),
      questions2: this.fb.array([]),
      questions3: this.fb.array([]),
      approvedBy: [''],

    })
    this.setQuestions();
    this.setQuestions2();
    this.setQuestions3()
  }

  onSubmit() {
    alert(this.myForm.value);
  }

  addNewQuestion() {
    let control = <FormArray>this.myForm.controls.questions;
    control.push(
      this.fb.group({
        question: [''],
        comments: this.fb.array([])
      })
    )
  }
  addNewQuestion2() {
    let control = <FormArray>this.myForm.controls.questions2;
    control.push(
      this.fb.group({
        question: [''],
        comments: this.fb.array([]),
        comments2: this.fb.array([])
      })
    )
  }
  addNewQuestion3() {
    let control = <FormArray>this.myForm.controls.questions3;
    control.push(
      this.fb.group({
        question: [''],
        comments: this.fb.array([])
      })
    )
  }

  deleteQuestion(index) {
    let control = <FormArray>this.myForm.controls.questions;
    control.removeAt(index)
  }
  deleteQuestion2(index) {
    let control = <FormArray>this.myForm.controls.questions2;
    control.removeAt(index)
  }
  deleteQuestion3(index) {
    let control = <FormArray>this.myForm.controls.questions3;
    control.removeAt(index)
  }

  addNewComment(control) {
    control.push(
      this.fb.group({
        comment: ['']
      }))
  }
  addNewComment2(control) {
    let counter3 = control.length
    console.log(counter3)
    if (counter3 <= 3) {
      control.push(
        this.fb.group({
          comment: ['']
        }))
        counter3 = counter3 + 1
    }
    else {
      this.presentAlert("ERROR:", "Maximum Options Reached")
    }
  }
  addNewComment3(control) {
    control.push(
      this.fb.group({
        comment: ['']
      }))
  }

  deleteComment(control, index) {
    control.removeAt(index)
  }

  setQuestions() {
    let control = <FormArray>this.myForm.controls.questions;
    this.data.questions.forEach(x => {
      control.push(this.fb.group({ 
        question: x.question, 
        comments: this.setComments(x) }))
    })
  }
  setQuestions2() {
    let control = <FormArray>this.myForm.controls.questions2;
    this.data.questions2.forEach(x => {
      control.push(this.fb.group({ 
        question: x.question, 
        comments: this.setComments(x),
        comments2: this.setComments2(x)}))
    })
  }
  setQuestions3() {
    let control = <FormArray>this.myForm.controls.questions3;
    this.data.questions3.forEach(x => {
      control.push(this.fb.group({ 
        question: x.question, 
        comments: this.setComments3(x) }))
    })
  }

  setComments(x) {
    let arr = new FormArray([])
    x.comments.forEach(y => {
      arr.push(this.fb.group({ 
        comment: y.comment 
      }))
    })
    return arr;
  }

  setComments2(x) {
    let arr = new FormArray([])
    x.comments2.forEach(y => {
      arr.push(this.fb.group({ 
        comment: y.comment 
      }))
    })
    return arr;
  }
  setComments3(x) {
    let arr = new FormArray([])
    x.comments.forEach(y => {
      arr.push(this.fb.group({ 
        comment: y.comment 
      }))
    })
    return arr;
  }

  ngOnInit() {
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
  pass(){
    console.log(this.myForm.value)
    const userData = this.myForm.value
    this.http.post('https://formana.azurewebsites.net//api/formanaAuth/input', userData)
    .subscribe(res =>{
      localStorage.setItem('data', JSON.stringify(res))
      this.router.navigateByUrl('/dashboard', {replaceUrl: true})
      console.log(res)
      this.presentAlert("FORM CREATION:", JSON.stringify(res))
    }, error =>{
      console.log(error)
    })

  }
  pass2(){
    console.log(this.myForm.value)
    const userData = this.myForm.value
    this.http.post('https://formana.azurewebsites.net//api/formanaAuth/input2', userData)
    .subscribe(res =>{
      localStorage.setItem('data2', JSON.stringify(res))
      this.router.navigateByUrl('/dashboard', {replaceUrl: true})
      console.log(res)
      this.presentAlert("FORM CREATION:", JSON.stringify(res))
    }, error =>{
      console.log(error)
    })

  }
  pass3(){
    console.log(this.myForm.value)
    const userData = this.myForm.value
    this.http.post('https://formana.azurewebsites.net//api/formanaAuth/input3', userData)
    .subscribe(res =>{
      localStorage.setItem('data3', JSON.stringify(res))
      this.router.navigateByUrl('/dashboard', {replaceUrl: true})
      console.log(res)
      this.presentAlert("FORM CREATION:", JSON.stringify(res))
    }, error =>{
      console.log(error)
    })

  }
}

const textarea = document.querySelector("textarea");
  if(textarea) {
    textarea.addEventListener("keyup", e =>{
      textarea.style.height = "63px";
      let scHeight = (e.target as HTMLElement).scrollHeight;
      textarea.style.height = `${scHeight}px`;
    });
  }
