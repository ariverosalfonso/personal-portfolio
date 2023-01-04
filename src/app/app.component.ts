import { Component, Renderer2 } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  darkMode: boolean = true;
  menuItems = [
    { title: 'Inicio', path: '/home' },
   
  ];

  constructor(private menuCtrl: MenuController,private renderer: Renderer2) {}

  ngOnInit() {}

  setTitle(title: string) {}


  change(event: any) {
    console.log(event.detail.checked);
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
