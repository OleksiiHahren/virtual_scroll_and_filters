import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortByComponent } from './components/sort-by/sort-by.component';
import {AngularMultiSelectModule} from "angular2-multiselect-dropdown";
import {RouterModule} from "@angular/router";
import { TableHeaderComponent } from './components/table-header/table-header.component';
import {ScrollingModule} from "@angular/cdk/scrolling";
import {TableBodyComponent} from "./components/table-body/table-body.component";




@NgModule({
  declarations: [TableBodyComponent, SortByComponent, TableHeaderComponent],

  imports: [
    CommonModule,
    AngularMultiSelectModule,
    ScrollingModule
  ],
  exports: [
    TableBodyComponent,
    AngularMultiSelectModule,
    SortByComponent,
    RouterModule,
    TableHeaderComponent,
  ],
})
export class CommonComponentsModule {

}
