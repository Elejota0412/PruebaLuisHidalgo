import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CryptoCurrency } from '../models/crypto-currency.model';

@Injectable({
  providedIn: 'root'
})
export class CryptoApiService {
  private apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,tether,binancecoin,solana,cardano,ripple,polkadot,dogecoin,usd-coin&order=market_cap_desc&sparkline=false&price_change_percentage=24h';

  constructor(private http: HttpClient) { }

  getCryptoData(): Observable<CryptoCurrency[]> {
    return this.http.get<CryptoCurrency[]>(this.apiUrl);
  }

  formatNumber(num: number): string {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(num);
  }

  formatPercentage(num: number): string {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      signDisplay: 'always'
    }).format(num);
  }
}