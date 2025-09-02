import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclaradoComponent } from './declarado.component';

describe('DeclaradoComponent', () => {
  let component: DeclaradoComponent;
  let fixture: ComponentFixture<DeclaradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclaradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclaradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
