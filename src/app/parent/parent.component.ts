import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  primitiveData: number = 1;
  nonPrimitiveData = { value: 1 };

  constructor(private dataService: DataService) {}

  // Scenario 1: Update primitive data
  updatePrimitive() {
    this.primitiveData++;
  }

  // Scenario 2: Mutate non-primitive data without changing the reference
  mutateNonPrimitive() {
    this.nonPrimitiveData.value++;
  }

  // Scenario 3: Update non-primitive data with a new reference (immutable)
  updateNonPrimitive() {
    this.nonPrimitiveData = { value: this.nonPrimitiveData.value + 1 };
  }

  // Scenario 4: Update service state
  updateServiceState() {
    this.dataService.updateData('Updated Service Data from Parent');
  }
}
