import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed = true;
  activeLink = 'inicio';

  sections = [
    { id: 'inicio', name: 'Inicio' },
    { id: 'pago', name: 'Métodos de Pago' },
    { id: 'cripto', name: 'CriptoMercado' },
    { id: 'beneficios', name: 'Beneficios' },
    { id: 'descargar', name: 'Descargar App' }
  ];

  ngOnInit(): void {
    this.checkScreenSize();
    this.setupScrollSpy();
  }

  scrollToSection(sectionId: string): void {
    this.setActiveLink(sectionId);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Altura aproximada del navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    if (window.innerWidth < 992) {
      this.isNavbarCollapsed = true;
    }
  }

  setupScrollSpy(): void {
    window.addEventListener('scroll', () => {
      this.updateActiveLinkOnScroll();
    });
  }

  updateActiveLinkOnScroll(): void {
    const scrollPosition = window.pageYOffset + 100; // Offset para activar antes
    
    for (const section of this.sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeLink = section.id;
          break;
        }
      }
    }
  }

  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  setActiveLink(link: string): void {
    this.activeLink = link;
  }

  checkScreenSize(): void {
    if (window.innerWidth >= 992) {
      this.isNavbarCollapsed = false;
    } else {
      this.isNavbarCollapsed = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (window.innerWidth < 992) {
      const target = event.target as HTMLElement;
      const navbar = document.querySelector('.navbar-collapse');
      const toggler = document.querySelector('.navbar-toggler');
      
      if (navbar && toggler && !navbar.contains(target) && !toggler.contains(target)) {
        this.isNavbarCollapsed = true;
      }
    }
  }
}