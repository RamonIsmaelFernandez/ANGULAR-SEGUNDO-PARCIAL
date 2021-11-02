import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noencontrada404Component } from './noencontrada404.component';

describe('Noencontrada404Component', () => {
  let component: Noencontrada404Component;
  let fixture: ComponentFixture<Noencontrada404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noencontrada404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noencontrada404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
