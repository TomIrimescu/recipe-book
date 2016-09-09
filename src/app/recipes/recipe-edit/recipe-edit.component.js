"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var RecipeEditComponent = (function () {
    function RecipeEditComponent(route, recipeService, formBuilder) {
        this.route = route;
        this.recipeService = recipeService;
        this.formBuilder = formBuilder;
        this.isNew = true;
    }
    RecipeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isNew = true;
        this.subscription = this.route.params.subscribe(
        //(params: any) => this.recipeIndex = +params['id'] // the unary '+' operator to convert string to number
        // the parseInt method to convert string to number
        function (params) {
            if (params.hasOwnProperty('id')) {
                _this.isNew = false;
                _this.recipeIndex = parseInt(params['id']);
                _this.recipe = _this.recipeService.getRecipe(_this.recipeIndex);
            }
            else {
                _this.isNew = true;
                _this.recipe = null;
            }
            _this.initForm();
        });
    };
    RecipeEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    RecipeEditComponent.prototype.initForm = function () {
        var recipeName = '';
        var recipeImageUrl = '';
        var recipeContent = '';
        var recipeIngredients = new forms_1.FormArray([]);
        if (!this.isNew) {
            for (var i = 0; i < this.recipe.ingredients.length; i++) {
                recipeIngredients.push(new forms_1.FormGroup({
                    name: new forms_1.FormControl(this.recipe.ingredients[i].name, forms_1.Validators.required),
                    amount: new forms_1.FormControl(this.recipe.ingredients[i].amount, [
                        forms_1.Validators.required,
                        forms_1.Validators.pattern("\\d+")
                    ])
                }));
            }
            recipeName = this.recipe.name;
            recipeImageUrl = this.recipe.imagePath;
            recipeContent = this.recipe.description;
        }
        this.recipeForm = this.formBuilder.group({
            name: [recipeName, forms_1.Validators.required],
            imagePath: [recipeImageUrl, forms_1.Validators.required],
            description: [recipeContent, forms_1.Validators.required],
            ingredients: recipeIngredients
        });
    };
    RecipeEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rb-recipe-edit',
            templateUrl: 'recipe-edit.component.html',
            styles: []
        })
    ], RecipeEditComponent);
    return RecipeEditComponent;
}());
exports.RecipeEditComponent = RecipeEditComponent;
//# sourceMappingURL=recipe-edit.component.js.map