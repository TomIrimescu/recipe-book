import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { RecipeService } from "../recipe.service";
import { Subscription } from "rxjs";
import { Recipe } from "../recipe";
import {
    FormArray,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from "@angular/forms";


@Component({
  selector: 'rb-recipe-edit',
  templateUrl: 'recipe-edit.component.html',
  styles: []
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private recipeForm: FormGroup;
  private recipeIndex: number;
  private recipe: Recipe;
  private isNew: boolean = true;
  private subscription: Subscription;
  private resetValueNull: string = null;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    let isNew = true;
    this.subscription = this.route.params.subscribe(
        //(params: any) => this.recipeIndex = +params['id'] // the unary '+' operator to convert string to number
        // the parseInt method to convert string to number
        (params: any) => {
          if (params.hasOwnProperty('id')){
            this.isNew = false;
            this.recipeIndex = parseInt(params['id']);
            this.recipe = this.recipeService.getRecipe(this.recipeIndex)
          }else{
            this.isNew = true;
            this.recipe = null;
          }
          this.initForm();
        }
    );
  }

  onSubmit(){
    const newRecipe = this.recipeForm.value;
    if(this.isNew){
      this.recipeService.addRecipe(newRecipe);
    } else{
      this.recipeService.editRecipe(this.recipe, newRecipe);
    }
    this.navigateBack();
  }

  onCancel(){
    this.navigateBack();
  }

  onAddItem(name: string, amount: string) {
    if((name == '') || (amount == '')){
      return;
    } else{
      (<FormArray>this.recipeForm.controls[ 'ingredients' ]).push(
          new FormGroup({
            name: new FormControl(name, Validators.required),
            amount: new FormControl(amount, [
              Validators.required,
              Validators.pattern("^[0-9]*$")
            ])
          })
      );
      this.resetValueNull = '';
    }
  }

  onRemoveItem(index: number){
    (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  private navigateBack(){
    this.router.navigate(['recipes']);
  }

  private initForm(){
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeContent = '';
    let recipeIngredients: FormArray = new FormArray([]);

    if (!this.isNew){
      if(this.recipe.hasOwnProperty('ingredients')) {
        for (let i = 0; i < this.recipe.ingredients.length; i++) {
          recipeIngredients.push(
              new FormGroup({
                name: new FormControl(this.recipe.ingredients[ i ].name, Validators.required),
                amount: new FormControl(this.recipe.ingredients[ i ].amount, [
                  Validators.required,
                  Validators.pattern("^[0-9]*$")
                ])
              })
          );
        }
      }
      recipeName   = this.recipe.name;
      recipeImageUrl = this.recipe.imagePath;
      recipeContent = this.recipe.description;
    }
    this.recipeForm = this.formBuilder.group({
      name: [recipeName, Validators.required],
      imagePath: [recipeImageUrl, Validators.required],
      description: [recipeContent, Validators.required],
      ingredients: recipeIngredients
    });
  }

}














