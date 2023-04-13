import { Component, Renderer2, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor() {}
  isListVisible: boolean = false;
    toggleListDisplay() {
      this.isListVisible = !this.isListVisible;
    }
  @HostListener('window:resize', ['$event'])
    onWindowResize(event: any) {
      if (event.target.innerWidth > 600) {
        this.isListVisible = false;
        this.isGrey = false;
      }
    }
  isRed: boolean = false;
    toggleColor() {
      this.isRed = !this.isRed;
    }
  isGrey: boolean = false;
  toggleBgColor() {
    this.isGrey = !this.isGrey;
  }
}