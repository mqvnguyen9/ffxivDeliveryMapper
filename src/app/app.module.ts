import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatStepperModule,
  MatTableModule,
  MatToolbarModule,
  MatTreeModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ResultsTreeComponent} from './results-tree/results-tree.component';
import {IngredientsTableComponent} from './ingredients-table/ingredients-table.component';
import {HttpClientModule} from '@angular/common/http';
import { RecipeInputComponent } from './recipe-input/recipe-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultsTreeComponent,
    IngredientsTableComponent,
    RecipeInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSelectModule,
    MatTreeModule,
    MatTableModule,
    HttpClientModule,
    // FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
