import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { RecipeService } from "./recipes";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { Routing } from "./app.routing";
import { HttpModule } from "@angular/http";
import { CoreModule } from "./core.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    HttpModule,
    CoreModule
  ],
  bootstrap: [ AppComponent ],
  providers: [
    RecipeService,
    ShoppingListService
  ]
})

export class AppModule {
}
