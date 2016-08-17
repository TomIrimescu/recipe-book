import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";


@NgModule({
	declarations: [AppComponent, HeaderComponent],
	imports: [BrowserModule, FormsModule ],
	bootstrap: [AppComponent]
})

export class AppModule {}
