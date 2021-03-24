import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsUiComponent } from './buttons-ui/buttons-ui.component';
import { InputUiComponent } from './input-ui/input-ui.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown/dropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { OrderByPipe } from './order-by.pipe';
import { FilterPipe } from './filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsUiComponent,
    InputUiComponent,
    DropdownComponent,
    OrderByPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
