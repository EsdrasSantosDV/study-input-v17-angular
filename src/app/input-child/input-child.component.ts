import {Component, input} from '@angular/core';

@Component({
  selector: 'app-input-child',
  standalone: true,
  imports: [],
  templateUrl: './input-child.component.html',
  styleUrl: './input-child.component.scss',
  })
export class InputChildComponent {

  count10=input(0,
    {
      alias: 'countInput',
      transform: (v:number) => v * 10,
    }
  );

  count100=input(0,
    {
      alias: 'countInput2',
      transform: (v:number) => v * 100,
    }
  );




}
