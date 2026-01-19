import { Component } from '@angular/core';
import {Footer} from '../../components/footer/footer';
import {Navbar} from '../../components/navbar/navbar';

@Component({
  selector: 'app-private',
  imports: [
    Footer,
    Navbar
  ],
  templateUrl: './private.html',
  styleUrl: './private.css',
})
export class Private {

}
