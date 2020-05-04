import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {MainServiceService} from "../services/main-service.service";
import {channel, genresFilms, years} from "../consts/select-values";
import {selectConfig} from "../consts/select-config";
import {SelectItemInterface} from "../interfaces/select-item";
import {FilmItemInterface} from "../interfaces/film-item";
import {tableHeader} from "../consts/table-header";
import {ParamsForReqInterface} from "../interfaces/params-for-req";
import {ActivatedRoute, Router} from "@angular/router";
import {take} from "rxjs/operators";
import {OrderByInterface} from "../interfaces/order-by.interface";
import {TableHeaderDataInterface} from "../interfaces/table-header.interface";
import {wrapperConfig} from "../consts/wrapper.config";

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrapperComponent implements OnInit {
  tableData$: Observable<FilmItemInterface[]>;
  genresFilms: SelectItemInterface[] = genresFilms;
  yearsOfFilms: SelectItemInterface[] = years;
  channelsOfFilms: SelectItemInterface[] = channel;
  genresActiveKey: SelectItemInterface[] = [];
  yearActiveKey: SelectItemInterface[] = [];
  channelsActiveKey: SelectItemInterface[] = [];
  readonly headerData: TableHeaderDataInterface[] = tableHeader;
  readonly selectConfig = selectConfig;
  readonly wrapperConf = wrapperConfig;

  constructor(private mainService: MainServiceService,
              private router: Router,
              private activeRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.tableData$ =
    this.mainService.getAllFilmsReq();
  }

  setParamsInUrl(key, value) {
    let params = {} as ParamsForReqInterface;
    this.activeRoute.params.pipe(take(1)).subscribe(data=> params = data);
    params[key] =value[0].id;
    this.routerNavigate(params);
    this.tableData$ =
      this.mainService.getAllFilmsReq()
  }

  removeParamInUrl(key) {
    let params = {} as ParamsForReqInterface;
    this.activeRoute.params.pipe(take(1)).subscribe(data=> params = data);
    delete params[key];
    this.routerNavigate(params);
    this.tableData$ =
      this.mainService.getAllFilmsReq()
  }

  setOrderParams(paramsForSortElem: OrderByInterface){
    let params = {} as ParamsForReqInterface;
    this.activeRoute.params.pipe(take(1)).subscribe(data=> params = data);
    params._sort = paramsForSortElem.field;
    params._order = paramsForSortElem.asc ? this.wrapperConf.asc :  this.wrapperConf.desc;
    this.router.navigate([],
      {
        queryParams: {...params
        },
        queryParamsHandling: "merge",
        skipLocationChange: true
      }
    )

    this.tableData$ =
      this.mainService.getAllFilmsReq()
  }

  routerNavigate(params) {
    this.router.navigate([],
      {
        queryParams: {...params},
        queryParamsHandling: "merge",
        skipLocationChange: true
      }
    )
  }

  prepareLabelForSelect(dataForSet, keySelect) {
    return {...dataForSet, text: keySelect}
  }

}
