import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-unit-type-treemap',
  template: `
    <div class="treemap">
      <h2>Unit Type Data</h2>
      <ul>
        <li *ngFor="let item of data">
          {{ item.pagePath }}: {{ item.views }} views
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .treemap {
      margin-top: 20px;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      margin-bottom: 10px;
    }
  `]
})
export class UnitTypeTreemapComponent {
  @Input() data: any[] = [];
}
