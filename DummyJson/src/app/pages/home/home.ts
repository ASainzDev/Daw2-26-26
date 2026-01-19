import { Component } from '@angular/core';
import {Footer} from '../../components/footer/footer';
import {Navbar} from '../../components/navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [
    Footer,
    Navbar
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
