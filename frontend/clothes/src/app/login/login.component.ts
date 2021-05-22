import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name: string;
  password: string;

  constructor(private authService: AuthServiceService, private router: Router) { 
    this.name = "",
    this.password = ""
  }

  ngOnInit(): void {
    if(localStorage.getItem("user")){
      localStorage.removeItem("user")
    }
  }

  login(){
    if(this.name != "" && this.password != ""){
      this.authService.login(this.name, this.password).subscribe(msg => {
        console.log(msg)
        localStorage.setItem('user', this.name)
        this.router.navigate(['main']);
      }, (err) => {console.log(err)})
    }
  }

}
