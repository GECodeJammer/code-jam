import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
// Library Imports
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// App Imports
import { getEngineById } from '../engines.model';

@Component({
  selector: 'app-engine-detail',
  templateUrl: './engine-detail.component.html',
  styleUrls: ['./engine-detail.component.css']
})
export class EngineDetailComponent implements OnInit {
  engine$: Observable<any>;
  components = [
    'Compressor', 'Combustor', 'Afterburner', 'Nozzle', 'Thrusters', 'Turbine'
  ];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.engine$ = this.route.paramMap.pipe(
      map((params: ParamMap) => {
        return getEngineById(parseInt(params.get('id'), 10));
      })
    );
  }

}
