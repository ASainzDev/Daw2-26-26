import { Component, inject } from '@angular/core';
import { BlogService } from '../../services/blog-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {


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
}
