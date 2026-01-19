import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Userdatarequest } from '../../interfaces/userdatarequest';
import { AuthService } from '../../services/authservice';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
// Yo en este caso, aunque puede ser un poco excesivo, voy a optar también por un reactiveForm para poder tiparlo bien con 
// una interface

// Inyección del servicio de autenticación
authService = inject(AuthService);

// Defino una instancia de Userdatareques (una interface) para asegurarme de que se mandan datos correctamente
userData? : Userdatarequest;

// Inyecto una instancia de router
router = inject(Router);

//Defino el formGroup
userLogin: FormGroup;

constructor(){
  this.userLogin = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
}

// Función para volver a la página de inici0
volverPrincipal() {
  this.router.navigate(['landing']);
}

// Este método es el que se va a encargar de enviar los datos de login del usuario para autenticarse
  protected submit() {
    if (this.userLogin.valid) {
      this.userData = this.userLogin.value as Userdatarequest;
      this.authService.userLogin(this.userData).subscribe({
        next: (response) => {
          localStorage.setItem('accesstoken', response.accessToken);
          //Navego a zona privada o dashboard o como lo haya llamado
          this.router.navigate(['dashboard']);

          //Actualizo el valor del signal. He hecho el método y no me hace falta realmente. Aquí he escrito código para nada
          this.authService.setAuthenticated(true);
          
        }
      });
    }
  }


}
