import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger('hamburgerAnimation', [
      state('open', style({
        transform: 'rotate(-45deg) translate(-5px, 6px)',
      })),
      state('closed', style({
        transform: 'none',
      })),
      transition('open <=> closed', [
        animate('0.3s'),
      ]),
    ]),
    trigger('menuItemsAnimation', [
      state('open', style({
        transform: 'translateX(0)',
      })),
      state('closed', style({
        transform: 'translateX(-100%)',
      })),
      transition('open <=> closed', [
        animate('0.3s'),
      ]),
    ]),
    ],
})
export class HomePageComponent implements OnInit {

  //* --------------------------  Start  -----------------------------------*//

  //* -----------------------  Decorated Methods  --------------------------*//

  //* -----------------------  Variable Declaration  -----------------------*//

  //* ---------------------------  Constructor  ----------------------------*//
  constructor() {}

  //* -------------------------  Lifecycle Hooks  --------------------------*//
  ngOnInit(): void {}

  //* ----------------------------  APIs Methods  --------------------------*//

  //* --------------------------  Public methods  --------------------------*//

  //* ------------------------------ Helper Function -----------------------*//
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;

  }
  //! -------------------------------  End  --------------------------------!//
}
