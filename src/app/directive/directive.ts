import { Component } from '@angular/core';
import { JsonPipe, NgClass, NgForOf, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive',
  imports: [
    NgIf,
    NgForOf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgClass,
    NgStyle,
    FormsModule,
  ],
  templateUrl: './directive.html',
  styleUrl: './directive.css',
})
export class Directive {
  estConnecte = true;
  age = 2;
  etudiants = [
    { nom: 'Alice', note: 15 },
    { nom: 'Bob', note: 14 },
    { nom: 'Charlie', note: 16 },
  ];
  role = 'user';

  statut = 'annule';
  get classes() {
    return {
      termine: this.statut === 'termine',
      'en-cours': this.statut === 'en-cours',
      annule: this.statut === 'annule',
    };
  }

  progression = 80; // %
  get stylesBarre() {
    return {
      width: this.progression + '%',
      'background-color': this.progression < 50 ? 'red' : 'green',
    };
  }

  user = {
    nom: 'feriel',
    email: 'ferielboumaya@gmail.com',
    age: 23,
  };
  soumettre() {
    console.log(this.user);
  }
}
