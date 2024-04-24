import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible => hidden', animate('2000ms ease-out')),
      transition('hidden => visible', animate('2000ms ease-in')),
    ]),
  ],
})
export class SkillsComponent implements OnInit {
  constructor(private router: Router) {}
  showContent: boolean = false;
  ngOnInit(): void {
    setTimeout(() => {
      this.showContent = true;
    }, 1000); // Delay of 10 seconds (10000 milliseconds)
  }
  loadPreviousPage() {
    console.log('checked!');

    this.router.navigate(['/animated-home']);
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
  @ViewChild('box', { static: false }) box!: ElementRef;

  hovered: boolean = false;

  onMouseOver(e: any) {
    console.log(e);
    this.hovered = true;
    (<HTMLDivElement>this.box.nativeElement).style.pointerEvents = 'auto';
    (<HTMLDivElement>this.box.nativeElement).style.cursor = 'pointer';
  }

  // onMouseOut(e: any) {
  //   this.hovered = false;
  // }

  onClick() {
    console.log('Box Clicked');
  }

  @ViewChild('rightBox', { static: false }) rightBox!: ElementRef;
  @ViewChild('leftBox', { static: false }) leftBox!: ElementRef;

  rightHovered: boolean = false;
  leftHovered: boolean = false;

  onRightMouseOver() {
    this.rightHovered = true;
    (<HTMLDivElement>this.rightBox.nativeElement).style.pointerEvents = 'auto';
    (<HTMLDivElement>this.rightBox.nativeElement).style.cursor = 'pointer';
  }

  onLeftMouseOver() {
    this.leftHovered = true;
    (<HTMLDivElement>this.leftBox.nativeElement).style.pointerEvents = 'auto';
    (<HTMLDivElement>this.leftBox.nativeElement).style.cursor = 'pointer';
  }

  onMouseOut() {
    this.rightHovered = false;
    this.leftHovered = false;
  }
}
