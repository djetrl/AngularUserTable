import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddUserComponent } from './form-add-user.component';

describe('FormAddUserComponent', () => {
  let component: FormAddUserComponent;
  let fixture: ComponentFixture<FormAddUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAddUserComponent]
    });
    fixture = TestBed.createComponent(FormAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
