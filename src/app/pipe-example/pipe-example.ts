import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe, PercentPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-pipe-example',
  imports: [DatePipe, UpperCasePipe, PercentPipe, CurrencyPipe],
  templateUrl: './pipe-example.html',
  styleUrl: './pipe-example.css',
})
export class PipeExample {
  today = new Date();
  prix = 1234.56;
  taux = 0.15;
  nom = 'angular';
}
