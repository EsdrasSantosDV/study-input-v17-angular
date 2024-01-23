import { Component, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputChildComponent } from './input-child/input-child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'input-poc';

  count = signal(0);

  increment() {
    this.count.update((v) => v + 1);
  }

  decrement() {
    this.count.update((v) => v - 1);
  }
}
