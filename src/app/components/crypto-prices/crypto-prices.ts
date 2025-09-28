import { Component, OnInit } from '@angular/core';
import { CryptoApiService } from '../../services/crypto-api';
import { CryptoCurrency } from '../../models/crypto-currency.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crypto-prices',
  imports: [CommonModule],
  templateUrl: './crypto-prices.html',
  styleUrls: ['./crypto-prices.css']
})
export class CryptoPricesComponent implements OnInit {
  cryptocurrencies: CryptoCurrency[] = [];
  loading: boolean = true;
  error: string = '';

  constructor(private cryptoService: CryptoApiService) { }

  ngOnInit(): void {
    this.loadCryptoData();
  }

  loadCryptoData(): void {
    this.loading = true;
    this.cryptoService.getCryptoData().subscribe({
      next: (data) => {
        this.cryptocurrencies = data;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Error al cargar los datos de criptomonedas';
        this.loading = false;
        console.error('Error:', error);
      }
    });
  }

  getChangeClass(change: number): string {
    return change >= 0 ? 'crypto-positive' : 'crypto-negative';
  }

  getChangeIcon(change: number): string {
    return change >= 0 ? '↗' : '↘';
  }
}