import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewratings',
  templateUrl: './viewratings.page.html',
  styleUrls: ['./viewratings.page.scss'],
})
export class ViewratingsPage implements OnInit {

  suggestions: string

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  addSuggestions() {
    let body = {
      suggestions: this.suggestions
    }
  
    console.log("Hatdog")
    console.log(body)
    this.http.post('http://localhost:8080/api/formanaAuth/addSuggestions', body)
    .subscribe(res =>{
      localStorage.getItem('suggestions')
      console.log(res)
    }, error =>{
       console.log(error)
    })
  }

}
