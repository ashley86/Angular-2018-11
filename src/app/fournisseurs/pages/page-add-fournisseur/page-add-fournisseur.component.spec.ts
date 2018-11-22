import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddFournisseurComponent } from './page-add-fournisseur.component';

describe('PageAddFournisseurComponent', () => {
  let component: PageAddFournisseurComponent;
  let fixture: ComponentFixture<PageAddFournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAddFournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
