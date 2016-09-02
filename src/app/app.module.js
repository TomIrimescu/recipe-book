"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require("./app.component");
var header_component_1 = require("./header.component");
var recipes_1 = require("./recipes");
var recipe_list_1 = require("./recipes/recipe-list");
var recipe_list_2 = require("./recipes/recipe-list");
var recipe_detail_1 = require("./recipes/recipe-detail");
var shopping_list_1 = require("./shopping-list");
var shopping_list_2 = require("./shopping-list");
var dropdown_directive_1 = require("./dropdown.directive");
var recipes_2 = require("./recipes");
var shopping_list_service_1 = require("./shopping-list/shopping-list.service");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                recipes_1.RecipesComponent,
                recipe_list_1.RecipeListComponent,
                recipe_list_2.RecipeItemComponent,
                recipe_detail_1.RecipeDetailComponent,
                shopping_list_1.ShoppingListComponent,
                shopping_list_2.ShoppingListAddComponent,
                dropdown_directive_1.DropdownDirective
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                recipes_2.RecipeService,
                shopping_list_service_1.ShoppingListService
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map