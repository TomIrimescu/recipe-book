import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { RecipesComponent } from "./recipes";
import { RecipeListComponent } from "./recipes/recipe-list"
import { RecipeItemComponent } from "./recipes/recipe-list"
import { RecipeDetailComponent } from "./recipes/recipe-detail"
import { ShoppingListComponent } from "./shopping-list";
import { ShoppingListAddComponent } from "./shopping-list";
import { DropdownDirective } from "./dropdown.directive";



@NgModule({
	declarations: [AppComponent, HeaderComponent, RecipesComponent, RecipeListComponent, RecipeItemComponent, RecipeDetailComponent, ShoppingListComponent, ShoppingListAddComponent, DropdownDirective],
	imports: [BrowserModule, FormsModule ],
	bootstrap: [AppComponent]
})

export class AppModule {}
