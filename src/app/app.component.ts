import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RestService} from './rest.service';
import {RecipeInputComponent} from './recipe-input/recipe-input.component';

export interface IngredientsInterface {
  id: number;
  name: string;
  quantity: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLinear = false;
  beginningAreaArray = ['La Noscea', 'The Black Shroud', 'Thanalan', 'Mor Dhona',
    'Coerthas', 'Dravania', 'Hingashi', 'Othard', 'Gyr Abania'];
  destinationArray = ['Gridania', 'Limsa Lominsa', 'Ul\'Dah'];
  formGroup: FormGroup;
  recipeIds: string;
  @ViewChild(RecipeInputComponent) recipeInputComponent;

  constructor(private _formBuilder: FormBuilder, public rest: RestService) {}

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      secondCtrl: ['', Validators.required],
      thirdCtrl: ['', Validators.required],
      fourthCtrl: ['', Validators.required]
    });
  }

  searchRecipe() {
    const recipeIds: string[] = [];
    const recipeNames: string[] = [];
    recipeNames.push(this.recipeInputComponent.firstItemControl.value);
    for (const group of this.recipeInputComponent.items.controls) {
      if (group instanceof FormControl) {
        recipeNames.push(group.value);
      }
    }
    const promise = new Promise((resolve, reject) => {
      this.rest.searchForItem(recipeNames).subscribe((data => {
        data.Results.forEach(function (result) {
          recipeIds.push(result.ID);
        });
        resolve();
      }));
    });
    promise.then(() => {
      this.recipeIds = recipeIds.toString();
    });
  }
}
