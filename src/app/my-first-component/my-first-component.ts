import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-my-first-component',
  imports: [NgForOf],
  templateUrl: './my-first-component.html',
  styleUrl: './my-first-component.css',
})
export class MyFirstComponent {
  prenom = 'Firial';
  nom = 'Gasmi';
  age = 23;
  email = 'ferielboumaya@gmail.com';
  score = 95;
  etudiants = [
    { nom: 'Alice', note: 15 },
    { nom: 'Bob', note: 14 },
    { nom: 'Charlie', note: 16 }
  ];
  getFullName(): string {
    return this.prenom + ' ' + this.nom;
  }
  getCategorie(): string {
    return this.score <= 80 ? 'Excellent' : 'Bien';
  }
}
