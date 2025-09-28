import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar";
import { CryptoPricesComponent } from "./components/crypto-prices/crypto-prices";
import { HeroSectionComponent } from "./components/hero-section/hero-section";
import { PaymentMethods } from "./components/payment-methods/payment-methods";
import { DownloadComponent } from './components/download/download';
import { BenefitsComponent } from './components/benefits/benefits';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, CryptoPricesComponent, HeroSectionComponent, PaymentMethods, DownloadComponent, BenefitsComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PruebaLuis');
}
