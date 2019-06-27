import {Component, Input, OnChanges, SimpleChange} from '@angular/core';
import {IngredientsInterface} from '../app.component';
import {RestService} from '../rest.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-ingredients-table',
  templateUrl: './ingredients-table.component.html',
  styleUrls: ['./ingredients-table.component.css']
})
export class IngredientsTableComponent implements OnChanges {
  columnHeaders: string[] = ['name', 'quantity'];
  private _ids: string;
  dataSource = new MatTableDataSource<IngredientsInterface>();
  // private changeLog: string[] = [];

  constructor(private rest: RestService) { }

  @Input('idsString')
  set ids(ids: string) {
    this._ids = ids;
  }

  get ids(): string {
    return this._ids;
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    const tableData = [];
    if (this.ids !== '' && this.ids !== undefined && this.ids !== null) {
      this.rest.getRecipes(this.ids).subscribe( data => {
        data.Results.forEach(result => {
          if (result.AmountIngredient0 !== 0) {
            tableData.push({
              name: result.ItemIngredient0.Name,
              quantity: result.AmountIngredient0
            });
          }
          if (result.AmountIngredient1 !== 0) {
            tableData.push({
              name: result.ItemIngredient1.Name,
              quantity: result.AmountIngredient1
            });
          }
          if (result.AmountIngredient2 !== 0) {
            tableData.push({
              name: result.ItemIngredient2.Name,
              quantity: result.AmountIngredient2
            });
          }
          if (result.AmountIngredient3 !== 0) {
            tableData.push({
              name: result.ItemIngredient3.Name,
              quantity: result.AmountIngredient3
            });
          }
          if (result.AmountIngredient4 !== 0) {
            tableData.push({
              name: result.ItemIngredient4.Name,
              quantity: result.AmountIngredient4
            });
          }
          if (result.AmountIngredient5 !== 0) {
            tableData.push({
              name: result.ItemIngredient5.Name,
              quantity: result.AmountIngredient5
            });
          }
          if (result.AmountIngredient6 !== 0) {
            tableData.push({
              name: result.ItemIngredient6.Name,
              quantity: result.AmountIngredient6
            });
          }
          if (result.AmountIngredient7 !== 0) {
            tableData.push({
              name: result.ItemIngredient7.Name,
              quantity: result.AmountIngredient7
            });
          }
        });
        this.dataSource = new MatTableDataSource<IngredientsInterface>(tableData);
      });
    }
    // const log: string[] = [];
    // for (const propName in changes) {
    //   const changedProp = changes[propName];
    //   const to = JSON.stringify(changedProp.currentValue);
    //   if (changedProp.isFirstChange()) {
    //     log.push(`Initial value of ${propName} set to ${to}`);
    //   } else {
    //     const from = JSON.stringify(changedProp.previousValue);
    //     log.push(`${propName} changed from ${from} to ${to}`);
    //   }
    // }
    // this.changeLog.push(log.join(', '));
    // console.log(this.changeLog);
  }
}
