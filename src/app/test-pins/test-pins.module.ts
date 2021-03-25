import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestPinsRoutingModule } from './test-pins-routing.module';
import { TestPinsComponent } from './test-pins.component';


@NgModule({
  declarations: [TestPinsComponent],
  imports: [
    CommonModule,
    TestPinsRoutingModule
  ]
})
export class TestPinsModule { }
