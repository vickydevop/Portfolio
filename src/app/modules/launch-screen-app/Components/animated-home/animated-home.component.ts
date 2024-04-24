import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { CustomSpinnerService } from 'src/app/shared/services/custom-spinner/custom-spinner.service';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animated-home',
  templateUrl: './animated-home.component.html',
  styleUrls: ['./animated-home.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible => hidden', animate('2000ms ease-out')),
      transition('hidden => visible', animate('2000ms ease-in')),
    ]),
  ],
})
export class AnimatedHomeComponent implements OnInit {
  //* --------------------------  Start  -----------------------------------*//

  //* -----------------------  Decorated Methods  --------------------------*//

  //* -----------------------  Variable Declaration  -----------------------*//

  //* ---------------------------  Constructor  ----------------------------*//
  constructor(
    private _spiner: CustomSpinnerService,
    private _cephService: ApiService,
    private router: Router
  ) {}
  showContent: boolean = false;
  //* -------------------------  Lifecycle Hooks  --------------------------*//
  ngOnInit(): void {
    setTimeout(() => {
      this.showContent = true;
    }, 1000); // Delay of 10 seconds (10000 milliseconds)
  }

  //* ----------------------------  APIs Methods  --------------------------*//

  //* --------------------------  Public methods  --------------------------*//
  rightContentVisible: boolean = false;
  anotherPageVisible: boolean = false;
  rightContentVisiblepro: boolean = false;
  toggleContent() {
    this.rightContentVisible = !this.rightContentVisible;
    this.anotherPageVisible = !this.anotherPageVisible;
    this.rightContentVisiblepro = !this.rightContentVisiblepro;
  }

  loadPreviousPage() {
    this.rightContentVisible = !this.rightContentVisible;
    this.anotherPageVisible = !this.anotherPageVisible;
  }
  goToMail() {
    this.router.navigate(['/mail-component']);
  }
  goAbout() {
    this.router.navigate(['/about']);
  }
  goSkills() {
    this.router.navigate(['/skills']);
  }
  goProjects() {
    this.router.navigate(['/projects']);
  }
  goExp() {
    this.router.navigate(['/experience']);
  }
  //* ------------------------------ Helper Function -----------------------*//
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }


  pdfUrl: string = '../../../../../assets/images/Vicky Chethan Resume.pdf';

  //! -------------------------------  End  --------------------------------!//
}
