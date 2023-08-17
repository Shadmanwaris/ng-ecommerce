import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  visible = false;
  size: any = 'default';
  toFixedValue = 2;
  precision = 2;

  open(): void {
    this.size = 'large';
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  customPrecisionFn(value: string | number, precision?: number): number {
    return +Number(value).toFixed(precision! + 1);
  }

  checkout() {
    this.visible = false;
  }

  continueShopping() {
    this.visible = false;
  }
}
