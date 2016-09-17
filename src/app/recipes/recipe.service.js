"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
require('rxjs/Rx');
var recipe_1 = require("./recipe");
var shared_1 = require("../shared");
var RecipeService = (function () {
    function RecipeService(http) {
        this.http = http;
        this.recipesChanged = new core_1.EventEmitter();
        this.recipes = [
            new recipe_1.Recipe('Schnitzel', 'Very tasty', 'http://images.derberater.de/files/imagecache/456xXXX_berater/berater/slides/WienerSchnitzel.jpg', [
                new shared_1.Ingredient('French Fries', 2),
                new shared_1.Ingredient('Pork Meat', 1)
            ]),
            new recipe_1.Recipe('Summer Salad', 'Refreshing', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [
                new shared_1.Ingredient('Iceberg Lettuce', 1),
                new shared_1.Ingredient('Olives', 13)
            ])
        ];
    }
    RecipeService.prototype.getRecipes = function () {
        return this.recipes;
    };
    RecipeService.prototype.getRecipe = function (id) {
        return this.recipes[id];
    };
    RecipeService.prototype.deleteRecipe = function (recipe) {
        this.recipes.splice(this.recipes.indexOf(recipe), 1);
    };
    RecipeService.prototype.addRecipe = function (recipe) {
        this.recipes.push(recipe);
    };
    RecipeService.prototype.editRecipe = function (oldRecipe, newRecipe) {
        this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
    };
    RecipeService.prototype.storeData = function () {
        var body = JSON.stringify(this.recipes);
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.put('https://recipebook-e34a4.firebaseio.com/recipes.json', body, { headers: headers });
    };
    RecipeService.prototype.fetchData = function () {
        var _this = this;
        return this.http.get('https://recipebook-e34a4.firebaseio.com/recipes.json')
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.recipes = data;
            _this.recipesChanged.emit(_this.recipes);
        });
    };
    RecipeService = __decorate([
        core_1.Injectable()
    ], RecipeService);
    return RecipeService;
}());
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipe.service.js.map