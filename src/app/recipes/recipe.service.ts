import { Injectable } from '@angular/core';
import { Recipe } from "./recipe";
import {Ingredient} from "../shared";

@Injectable()
export class RecipeService {

	private recipes: Recipe[] = [
		new Recipe('Schnitzel', 'Very tasty', 'http://images.derberater.de/files/imagecache/456xXXX_berater/berater/slides/WienerSchnitzel.jpg', [
			new Ingredient('French Fries', 2),
			new Ingredient('Pork Meat', 1)
		]),
		new Recipe('Summer Salad', 'Refreshing', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [
			new Ingredient('Iceberg Lettuce', 1),
			new Ingredient('Olives', 13)
		])
	];

  constructor() { }

  getRecipes(){
  	return this.recipes;
  }

}
