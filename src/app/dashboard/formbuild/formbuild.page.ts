import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formbuild',
  templateUrl: './formbuild.page.html',
  styleUrls: ['./formbuild.page.scss'],
})
export class FormbuildPage implements OnInit {

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
    ]
  }

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.myForm = this.fb.group({
      title: [''],
      questions: this.fb.array([]),
      questions2: this.fb.array([])
    })

    this.setQuestions();
    this.setQuestions2();
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

  deleteQuestion(index) {
    let control = <FormArray>this.myForm.controls.questions;
    control.removeAt(index)
  }
  deleteQuestion2(index) {
    let control = <FormArray>this.myForm.controls.questions2;
    control.removeAt(index)
  }

  addNewComment(control) {
    control.push(
      this.fb.group({
        comment: ['']
      }))
  }
  addNewComment2(control) {
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

  ngOnInit() {
  }
  pass(){
    console.log(this.myForm.value)
    const userData = this.myForm.value
    this.http.post('http://localhost:8080/api/formanaAuth/input', userData)
    .subscribe(res =>{
      localStorage.setItem('data', JSON.stringify(res))
      this.router.navigateByUrl('/dashboard', {replaceUrl: true})
      console.log(res)
    }, error =>{
      console.log(error)
    })

  }
}
