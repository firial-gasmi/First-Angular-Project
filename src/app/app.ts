import { Component, signal } from '@angular/core';
import { MyFirstComponent } from './my-first-component/my-first-component';
import { FormsModule } from '@angular/forms';
import { Directive } from './directive/directive';
import { PipeExample } from './pipe-example/pipe-example';

@Component({
  selector: 'app-root',
  imports: [FormsModule, Directive, PipeExample],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('first-angular-project');
  name = 'Firial';
  age = 23;
  imageone = 'https://picsum.photos/200/150?random=2';

  afficher() {
    console.log(this.name);
    window.alert('Bonjour');
  }
}
