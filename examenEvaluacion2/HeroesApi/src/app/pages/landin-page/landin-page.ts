import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";

@Component({
  selector: 'app-landin-page',
  imports: [RouterOutlet, Footer, Navbar],
  templateUrl: './landin-page.html',
  styleUrl: './landin-page.css',
})
export class LandinPage {

}
