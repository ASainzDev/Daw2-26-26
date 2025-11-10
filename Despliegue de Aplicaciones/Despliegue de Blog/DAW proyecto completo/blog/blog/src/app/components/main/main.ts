import { Component } from '@angular/core';
import { CentralSection } from '../central-section/central-section';
import { LeftSection } from '../left-section/left-section';

@Component({
  selector: 'app-main',
  imports: [CentralSection, LeftSection],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {

}
