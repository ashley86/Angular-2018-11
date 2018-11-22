import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormFournisseurComponent } from './reactive-form-fournisseur.component';

describe('ReactiveFormFournisseurComponent', () => {
  let component: ReactiveFormFournisseurComponent;
  let fixture: ComponentFixture<ReactiveFormFournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormFournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
