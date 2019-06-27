import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormArray, Validators} from '@angular/forms';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-recipe-input',
  templateUrl: './recipe-input.component.html',
  styleUrls: ['./recipe-input.component.css']
})
export class RecipeInputComponent implements OnInit {
  formGrouping: FormGroup;
  firstItemControl = new FormControl('', Validators.required);
  constructor(private _formBuilder: FormBuilder, public rest: RestService) { }

  ngOnInit() {
    this.formGrouping = this._formBuilder.group({
      items: this._formBuilder.array([
        this._formBuilder.control('')
      ])
    });
  }

  get items() {
    return this.formGrouping.get('items') as FormArray;
  }

  addItem() {
    this.items.push(this._formBuilder.control(''));
  }

  deleteItem(i) {
    this.items.removeAt(i);
  }
}
