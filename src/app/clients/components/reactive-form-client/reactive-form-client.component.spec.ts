import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormClientComponent } from './reactive-form-client.component';

describe('ReactiveFormClientComponent', () => {
  let component: ReactiveFormClientComponent;
  let fixture: ComponentFixture<ReactiveFormClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
