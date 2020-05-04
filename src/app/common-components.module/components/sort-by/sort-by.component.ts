import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrderByInterface} from "../../../interfaces/order-by.interface";

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortByComponent implements OnInit {
  @Input() orderByField: string;
  @Input() currentKeyEqual: boolean;
  @Output() emitOrder: EventEmitter<OrderByInterface> = new EventEmitter<OrderByInterface>();
  asc: boolean = false;

  constructor(
  ) {
  }

  ngOnInit() {
  }



  changeSortBy() {
    this.asc = !this.asc;
    this.emitOrder.emit({
      field: this.orderByField,
      asc: this.asc
    });
  }

}
