<<<<<<< HEAD
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
=======
import { Component, inject } from '@angular/core';
import { BlogService } from '../../services/blog-service';
import { FormsModule } from '@angular/forms';
>>>>>>> 580f17a (Martes mañana)

@Component({
  selector: 'app-navbar',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

<<<<<<< HEAD
  @Output() rol = new EventEmitter();

  usuario : number;

  constructor(){
    this.usuario = 2;
  }

seleccionarUsuario($event : any) {

  this.usuario = $event.target.value;

  this.rol.emit(this.usuario);
  console.log(this.usuario);
}

=======

  blogServicio = inject(BlogService);
  selectedRole: string = 'User';

  

  constructor() {  
    
  }

  ngOnInit(): void {


    this.blogServicio.setSelectedUser(this.selectedRole);
  }


  handleSelectChange() {
    this.blogServicio.setSelectedUser(this.selectedRole);
    console.log('Selected user:', this.blogServicio.getSelectedUser());
  }
>>>>>>> 580f17a (Martes mañana)
}
