import { Component } from '@angular/core';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent {
  panels = [
    {
      id: 1,
      active: true,
      name: 'Product Type',
      disabled: false
    },
    {
      id: 2,
      active: true,
      disabled: false,
      name: 'Collection'
    },
    {
      id: 3,
      active: true,
      disabled: false,
      name: 'Size'
    },
    {
      id: 4,
      active: true,
      disabled: false,
      name: 'Price'
    },
  ];
}
