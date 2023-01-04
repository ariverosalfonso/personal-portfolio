import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  darkMode: boolean = true;

  constructor(private renderer: Renderer2) {}

  change(event: any) {
    // event.detail.checked ? document.body.setAttribute('color-theme', 'dark') : document.body.setAttribute('color-theme', 'light')
    if (event.detail.checked) {
      this.renderer.setAttribute(document.body, 'color-theme', 'dark');
      this.darkMode = false;
    } else {
      this.renderer.setAttribute(document.body, 'color-theme', 'light');
      this.darkMode = true;
    }
  }
}
