"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require("./home.component");
var APP_ROUTES = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule' },
    { path: 'shopping-list', loadChildren: 'app/shopping-list/shopping-list.module#ShoppingListModule' }
];
exports.Routing = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map