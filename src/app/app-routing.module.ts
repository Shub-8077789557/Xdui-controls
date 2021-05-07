import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsUiComponent } from './buttons-ui/buttons-ui.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { InputUiComponent } from './input-ui/input-ui.component';
import { ModalsComponent } from './modals/modals.component';

const routes: Routes = [
  {path: '', component: ButtonsUiComponent},
  {path: 'inputs', component: InputUiComponent},
  {path: 'dropdowns', component: DropdownComponent},
  {path: 'modals', component: ModalsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
