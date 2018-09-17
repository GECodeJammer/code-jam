import { Component } from '@angular/core';
import { map, debounceTime, startWith } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { FormControl } from '../../../node_modules/@angular/forms';
import { engines } from './engines.model';

@Component({
  selector: 'app-technical-library',
  templateUrl: './technical-library.component.html',
  styleUrls: ['./technical-library.component.scss']
})
export class TechnicalLibraryComponent {
  /** Based on the screen size, switch from standard to one column per row */
  public columns = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return 1;
      } else {
        return 2;
      }
    }));

  public groups = engines;

  // Initialize the filteredGroups with all groups
  public filteredGroups$;
  // Initialize Search Control
  public searchFormControl = new FormControl('', []);

  constructor(private breakpointObserver: BreakpointObserver) {
    this.handleSearch();
  }

  handleSearch(): void {
    this.filteredGroups$ = this.searchFormControl.valueChanges.pipe(
      startWith(''),
      debounceTime(100),
      map(((searchValue: string) => {
        if (searchValue) {
          return this.groups.map(group => {
            const matchedAircraft = group.aircraft.filter(aircraft => {
              const hasTags = aircraft.tags.some(tag => tag.includes(searchValue));
              return aircraft.title.includes(searchValue) || aircraft.description.includes(searchValue) || hasTags;
            });
            return {
              ...group,
              aircraft: matchedAircraft
            };
          });
        } else {
          return this.groups;
        }
      }))
    );
  }

}
