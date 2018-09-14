
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalLibraryComponent } from './technical-library.component';

describe('TechnicalLibraryComponent', () => {
  let component: TechnicalLibraryComponent;
  let fixture: ComponentFixture<TechnicalLibraryComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
