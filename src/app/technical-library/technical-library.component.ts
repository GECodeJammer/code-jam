import { Component } from '@angular/core';
import { map, debounceTime, startWith } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { FormControl } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-technical-library',
  templateUrl: './technical-library.component.html',
  styleUrls: ['./technical-library.component.css']
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

  public groups = [
    {
      title: 'TWIN-AISLE AIRCRAFT',
      aircraft: [
        {
          title: 'GE 90',
          description: `Specifically designed for the Boeing 777, the GE90 is the world's most powerful turbofan.`,
          imageRef: 'https://www.geaviation.com/sites/default/files/thumb-ge90_1.jpg',
          tags: ['GE90', '777', 'turbofan']
        },
        {
          title: 'GE9X',
          description: `Purpose-designed for the Boeing 777X, the GE9X will be the most fuel-efficient engine GE has ever produced.`,
          imageRef: 'https://www.geaviation.com/sites/default/files/thumb-ge9x_2.jpg',
          tags: ['777x', 'GE9x']
        },
        {
          title: 'GENX',
          description: `Powering the Boeing 787 Dreamliner and 747-8, the GEnx is the fastest-selling engine in GE Aviation history.`,
          imageRef: 'https://www.geaviation.com/sites/default/files/thumb-genx_1.jpg',
          tags: []
        },
        {
          title: 'GP7200',
          description: `The GP7200 engine is produced by a 50/50 Joint Venture between GE and Pratt & Whitney.
          It is the most reliable and most fuel efficient engine available for the Airbus A380`,
          imageRef: 'https://www.geaviation.com/sites/default/files/thumb-gp7000.jpg',
          tags: []
        },
        {
          title: 'CF6',
          description: `For 45 years, the CF6 family of engines have been the cornerstone of the best widebody,
          long-range commercial aircraft in the industry.`,
          imageRef: 'https://www.geaviation.com/sites/default/files/thumb-cf6.jpg',
          tags: []
        },
      ]
    },
    {
      title: 'SINGLE-AISLE AIRCRAFT',
      aircraft: [
        {
          title: 'CFM56',
          description: `The CFM56 is produced by a 50/50 Joint Venture between GE and Safran Aircraft Engines.`,
          imageRef: 'https://www.geaviation.com/sites/default/files/thumb-cfm56.jpg',
          tags: ['GE90', '777', 'turbofan']
        },
        {
          title: 'LEAP',
          description: `A worthy successor to the CFM56, the new LEAP engine will bring double-digit improvements
            in fuel efficiency, emissions and noise.`,
          imageRef: 'https://www.geaviation.com/sites/default/files/thumb-leap.jpg',
          tags: ['777x', 'GE9x']
        }
      ]
    },
    {
      title: 'REGIONAL AIRCRAFT',
      aircraft: [
        {
          title: 'CF34',
          description: `The CF34 engine helped launch the era of regional jets. More than 135 million flight hours
            and 110 million flight cycles later.`,
          imageRef: 'https://www.geaviation.com/sites/default/files/thumb-cf34_0.jpg',
          tags: ['GE90', '777', 'turbofan']
        }
      ]
    },
  ];

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
