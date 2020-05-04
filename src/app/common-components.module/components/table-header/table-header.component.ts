import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {OrderByInterface} from "../../../interfaces/order-by.interface";
import {TableHeaderDataInterface} from "../../../interfaces/table-header.interface";

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableHeaderComponent {
  @Input() tableHeaderData: TableHeaderDataInterface[];
  @Output() emitCurrentKeySort: EventEmitter<OrderByInterface> = new EventEmitter<OrderByInterface>();
  currentKeySort: string;

  constructor() {
  }

  setCurrentKeySortMethod(val) {
    this.currentKeySort = val.field;
    this.emitCurrentKeySort.emit(val)
  }

}
