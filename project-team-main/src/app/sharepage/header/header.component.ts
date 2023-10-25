import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const elements = document.querySelectorAll<HTMLElement>('.transparent');

    elements.forEach((element: HTMLElement) => {
      if (scrollTop > 10) {
        element.classList.add('smaller');
      } else {
        element.classList.remove('smaller');
      }
    });
  }
}
