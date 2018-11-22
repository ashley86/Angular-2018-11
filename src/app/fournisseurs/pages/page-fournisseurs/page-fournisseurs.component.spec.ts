import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFournisseursComponent } from './page-fournisseurs.component';

describe('PageFournisseursComponent', () => {
  let component: PageFournisseursComponent;
  let fixture: ComponentFixture<PageFournisseursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFournisseursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFournisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
