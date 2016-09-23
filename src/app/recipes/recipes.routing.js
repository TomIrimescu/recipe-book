"use strict";
var router_1 = require("@angular/router");
var recipe_start_component_1 = require("./recipe-start.component");
var recipe_detail_1 = require("./recipe-detail");
var recipe_edit_1 = require("./recipe-edit");
var recipes_component_1 = require("./recipes.component");
var RECIPE_ROUTES = [
    { path: '', component: recipes_component_1.RecipesComponent, children: [
            { path: '', component: recipe_start_component_1.RecipeStartComponent },
            { path: 'new', component: recipe_edit_1.RecipeEditComponent },
            { path: ':id', component: recipe_detail_1.RecipeDetailComponent },
            { path: ':id/edit', component: recipe_edit_1.RecipeEditComponent }
        ] }
];
exports.recipesRouting = router_1.RouterModule.forChild(RECIPE_ROUTES);
//# sourceMappingURL=recipes.routing.js.map