import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './benefits.html',
  styleUrls: ['./benefits.css']
})
export class BenefitsComponent {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  
  activeBenefit = 1;
  isPlaying = false;

  benefits = [
    { id: 1, title: 'Transacciones en Tiempo Real', description: 'Operaciones completadas en minutos.' },
    { id: 2, title: 'Seguridad Bancaria', description: 'Encriptación avanzada y custodia profesional.' },
    { id: 3, title: '+70 Métodos de Pago', description: 'Desde Nequi hasta transferencias bancarias.' },
    { id: 4, title: 'Hecho para LATAM', description: 'Diseñada para usuarios latinoamericanos.' },
    { id: 5, title: 'Interfaz Intuitiva', description: 'Fácil para principiantes, potente para expertos.' },
    { id: 6, title: 'Compra y Vende', description: 'Plataforma completa con liquidez garantizada.' }
  ];

  playVideo(): void {
    if (this.videoPlayer) {
      this.videoPlayer.nativeElement.play();
      this.isPlaying = true;
    }
  }

  pauseVideo(): void {
    if (this.videoPlayer) {
      this.videoPlayer.nativeElement.pause();
      this.isPlaying = false;
    }
  }

  toggleVideo(): void {
    if (this.isPlaying) {
      this.pauseVideo();
    } else {
      this.playVideo();
    }
  }

  setActiveBenefit(benefitId: number): void {
    this.activeBenefit = benefitId;
  }

  onVideoPlay(): void {
    this.isPlaying = true;
  }

  onVideoPause(): void {
    this.isPlaying = false;
  }

  onVideoEnd(): void {
    this.isPlaying = false;
  }
}