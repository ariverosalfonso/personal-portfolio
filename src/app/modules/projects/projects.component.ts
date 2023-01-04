import { AfterContentChecked, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import SwiperCore ,{ SwiperOptions, Pagination, Swiper, EffectCube } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Pagination,EffectCube])
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation:ViewEncapsulation.None

})
export class ProjectsComponent implements OnInit, AfterContentChecked {

  @ViewChild('swiper') swiper!: SwiperComponent;
  config: SwiperOptions = {
    slidesPerView:2,
    effect:'cube',
    pagination: { clickable: true },

  }
  projects = [
    {img:'./../../../assets/projects/company.png', title:'Portal de una empresa', description:'Proyecto que permite autenticarse a una empresa, donde visualiza sus sedes y puede escanear y generar código qr. Desplegado en firebase', framework:'Ionic',icon:'globe-outline', url:'https://company-user-85a0a.web.app/login'},
    {img:'./../../../assets/projects/pokemon.png', title:'Ui Pokemones', description:'Proyecto realizado con la api de pokemones, donde los pokemones compiten, contiene bootstrap' , framework:'Angular, Node Js',icon:'logo-github', url:'https://github.com/ariverosalfonso/ui-pokemon'},
    {img:'./../../../assets/projects/generadorTurnos.png', title:'Generador de Turnos', description:'Proyecto que genera turnos, de acuerdo a un procedimiento almacenado, el backend se realizo con Node js y se conecto a Sql server', framework:'Angular, Node Js',icon:'logo-github',url:'https://github.com/ariverosalfonso/reserva-turnos' },
    {img:'./../../../assets/projects/reviewApp.png', title:'Blog de Restaurantes', description:'Proyecto realizado en clase junto con un compañero (Juan Rojas), se creo un blog para que las personas publiquen sus reseñas sobre restaurantes. Desplegado en firebase' , framework:'Angular',icon:'globe-outline',url:'https://reviewappja.web.app/auth/login'}
  ]
  constructor() { }
  
  //Cada vez que se ejecuta la detección de cambios (cambio de estado de la aplicación).
  ngAfterContentChecked(): void {
    if(this.swiper){
      this.swiper.updateSwiper({});
    }
  }

  ngOnInit() {}

}
