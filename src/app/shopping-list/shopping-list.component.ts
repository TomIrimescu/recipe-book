import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient";

@Component({
  moduleId: module.id,
  selector: 'rb-shopping-list',
  templateUrl: 'shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];

  constructor() { }

  ngOnInit() {
  }

}
