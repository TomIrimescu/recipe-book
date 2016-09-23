import { Routes, RouterModule } from "@angular/router";
import { RecipeStartComponent } from "./recipe-start.component";
import { RecipeDetailComponent } from "./recipe-detail";
import { RecipeEditComponent } from "./recipe-edit";
import { RecipesComponent } from "./recipes.component";

const RECIPE_ROUTES: Routes = [
  { path: '', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent }
  ]}
];

export const recipesRouting = RouterModule.forChild(RECIPE_ROUTES);