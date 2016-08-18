import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe";

@Component({
	moduleId: module.id,
	selector: 'rb-recipe-list',
	templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [];
	recipe = new Recipe('Dummy is the name','This is the description for Dummy', 'https://pbs.twimg.com/profile_images/1620149654/avatar.jpg');
	constructor() {
	}

	ngOnInit() {
	}

}
