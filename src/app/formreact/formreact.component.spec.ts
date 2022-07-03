import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormreactComponent } from './formreact.component';

describe('FormreactComponent', () => {
  let component: FormreactComponent;
  let fixture: ComponentFixture<FormreactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormreactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormreactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
