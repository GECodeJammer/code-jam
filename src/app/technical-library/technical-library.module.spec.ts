import { TechnicalLibraryModule } from './technical-library.module';

describe('TechnicalLibraryModule', () => {
  let technicalLibraryModule: TechnicalLibraryModule;

  beforeEach(() => {
    technicalLibraryModule = new TechnicalLibraryModule();
  });

  it('should create an instance', () => {
    expect(technicalLibraryModule).toBeTruthy();
  });
});
