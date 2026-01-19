import {Component, inject} from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserDataRequest} from '../../interfaces/user-data-request.interface';
import {AuthService} from '../../core/services/authservice';
import {Router} from '@angular/router';
import {Navbar} from '../../components/navbar/navbar';
import {Footer} from '../../components/footer/footer';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, Navbar, Footer],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  //Defino el formcontrol

  userLogin: FormGroup;

  //Defino una variable del tipo user-data-request

  private userData! : UserDataRequest;

  //injecto el servicio de auth
  authservice = inject(AuthService);

  //injecto el servicio de router
  router = inject(Router);

  constructor(){
    this.userLogin = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  protected submit() {
    if (this.userLogin.valid) {
      this.userData = this.userLogin.value as UserDataRequest;
      this.authservice.userLogin(this.userData).subscribe({
        next: (response) =>{
          localStorage.setItem('accessToken', response.accessToken);
          localStorage.setItem('refreshToken', response.refreshToken);
          localStorage.setItem('username', response.username);

          //Navego a zona privada o dashboard o como lo haya llamado
          this.router.navigate(['private']);

          //Actualizo el valor del signal. He hecho el método y no me hace falta realmente. Aquí he escrito código para nada
          this.authservice.setAuthenticated(true);

          //Actualizo el valor del usuario logeado
          this.authservice.setUsuarioLogeado(response);
        }
      });
    }
  }

  protected volverPrincipal() {
    this.router.navigate(['home']);
  }
}
