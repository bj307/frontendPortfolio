import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/BKSocial/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void { }

  usuario: string = '';
  senha: string = '';

  constructor(private authService: AuthService, private router: Router) {

  }

  login() {
    this.authService.autenticar(this.usuario, this.senha).subscribe(
      () => this.router.navigate(['bk-social/galeria']) , (error) => { alert("Dados inválidos"); console.log(error) })
  }


}

