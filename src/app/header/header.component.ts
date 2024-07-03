import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  links  = [
    {name: 'Inicio', url: '', activated: true},
    {name: 'Servicios', url: '/servicios', activated: false},
    {name: 'Fotos', url: '/fotos', activated: false},
    {name: 'Equipo', url: '/equipo', activated: false},
    {name: 'Reservas', url: '/reservas', activated: false},
    {name: 'Contacta', url: '/contacta', activated: false},
  ];

  constructor(private el: ElementRef, private renderer: Renderer2){}

  ngOnInit():void{

  }

  closeMenu() {
    const navbarCollapse = this.el.nativeElement.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      this.renderer.removeClass(navbarCollapse, 'show');
    }
  }

  selectLink(itemLink: any){
    this.links.forEach((link) => {
      if(link.name === itemLink.name){
        link.activated = true;
      }else{
        link.activated = false;
      }
    });
  }
}
