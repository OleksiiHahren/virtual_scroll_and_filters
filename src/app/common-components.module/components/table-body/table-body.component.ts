import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FilmItemInterface} from "../../../interfaces/film-item";
import {colorsConfig} from "../../../consts/colors.config";

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TableBodyComponent  {
  readonly colors = colorsConfig;
  @Input() tableData: FilmItemInterface[];
  constructor() { }

  showGenres(data){
  return  data.split(', ')
  }

  colorForItem(itemGenre){
    return this.colors[itemGenre]
  }
}
