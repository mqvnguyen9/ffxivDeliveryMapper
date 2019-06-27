import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

const endpoint = 'https://xivapi.com';
const key = {
  keyValue: 'fa5552c5affa4a5eac01f387'
};
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
    'Access-control-Allow-Methods': 'GET,OPTIONS,POST'
  }),
  params: new HttpParams().set('key', 'fa5552c5affa4a5eac01f387')
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  searchForItem(recipeName): Observable<any> {
    const payload: any = {
      'indexes': 'recipe',
      'body': {
        'query': {
          'bool': {
            'should': []
          }
        },
        'size': 0
      }
    };
    recipeName.forEach(function (recipe) {
      const name = {
        'term': {
          'Name_en': recipe.toLowerCase()
        }
      };
      payload.body.query.bool.should.push(name);
    });
    payload.body.size = recipeName.length;
    return this.http.post(endpoint + '/search', payload, {headers: httpOptions.headers, params: httpOptions.params.set('indexes', 'recipe')}).pipe(map(this.extractData));
  }

  getRecipes(idString: string): Observable<any> {
    const params = new HttpParams()
      .set('key', key.keyValue)
      .set('columns', 'AmountIngredient0,AmountIngredient1,AmountIngredient2,AmountIngredient3,AmountIngredient4,AmountIngredient5,' +
        'AmountIngredient6,AmountIngredient7,ID,ItemIngredient0.ID,ItemIngredient0.Name,ItemIngredient1.ID,ItemIngredient1.Name,' +
        'ItemIngredient2.ID,ItemIngredient2.Name,ItemIngredient3.ID,ItemIngredient3.Name,ItemIngredient4.ID,ItemIngredient4.Name,' +
        'ItemIngredient5.ID,ItemIngredient5.Name,ItemIngredient6.ID,ItemIngredient6.Name,ItemIngredient7.ID,ItemIngredient7.Name')
      .set('ids', idString);
    return this.http.get(endpoint + '/recipe', {params: params}).pipe(map(this.extractData), catchError(this.handleError()));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      console.log('${operation} failed: ${error.message}');

      return of(result as T);
    };
  }
}
