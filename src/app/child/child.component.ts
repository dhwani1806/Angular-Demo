import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
} from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, // Enabling OnPush
  // providers: [DataService], // Providing a new instance for the child will not give the updated data by parent
})
export class ChildComponent implements OnInit {
  @Input() parentPrimitive!: number;
  @Input() parentNonPrimitive!: { value: number };

  serviceData$!: Observable<string>;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.serviceData$ = this.dataService.data$;
  }

  updateLocalState() {
    this.parentNonPrimitive = { value: this.parentNonPrimitive.value + 10 };
  }
}
