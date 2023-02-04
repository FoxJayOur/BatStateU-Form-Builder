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
    ]
  }

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.myForm = this.fb.group({
      title: [''],
      questions: this.fb.array([])
    })

    this.setQuestions();
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

  deleteQuestion(index) {
    let control = <FormArray>this.myForm.controls.questions;
    control.removeAt(index)
  }

  addNewComment(control) {
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

  setComments(x) {
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
