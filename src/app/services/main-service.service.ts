import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, switchMap, take} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {FilmItemInterface} from "../interfaces/film-item";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  readonly root_url = ' http://localhost:3000/films';

  constructor(private http: HttpClient,
              private route: ActivatedRoute
  ) {
  }

  getAllFilmsReq(): Observable<any> {
    return this.route.params.pipe(
      take(1),
      switchMap(params => {
        console.log(params)
          const pureParams = {...params};
          if (params.hasOwnProperty('genres')) {
            const genres = pureParams.hasOwnProperty('genres') ? pureParams.genres : null;
            delete pureParams.genres
            const query = this.encodeQueryParamsToURL({...pureParams}, this.root_url);
            return this.http.get(query).pipe(map((el: FilmItemInterface[]) => el.filter(el => el.genre.includes(genres))))
          } else {
            const query = this.encodeQueryParamsToURL({...pureParams}, this.root_url);
            return this.http.get(query)
          }
        }
      )
    )
  }

  private encodeQueryParamsToURL(obj = {}, ...arg: string[]): string {
    const str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p) && obj[p] !== undefined) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return `${arg.join("")}?${str.join("&")}`;
  }
}
