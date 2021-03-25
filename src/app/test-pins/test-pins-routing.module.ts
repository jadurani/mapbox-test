import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestPinsComponent } from './test-pins.component';

const routes: Routes = [
  {
    path: "",
    component: TestPinsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestPinsRoutingModule { }
