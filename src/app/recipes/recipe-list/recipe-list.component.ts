import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe";


@Component({
	moduleId: module.id,
	selector: 'rb-recipe-list',
	templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [];
	@Output() recipeSelected = new EventEmitter<Recipe>();
	recipe = new Recipe('Dummy Recipe','This is the description', 'https://pbs.twimg.com/profile_images/1620149654/avatar.jpg');
	constructor() {
	}

	ngOnInit() {
	}

	onSelected(recipe: Recipe){
		this.recipeSelected.emit(recipe);
	}

}
