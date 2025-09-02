import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServentiaComponent } from './serventia.component';

describe('ServentiaComponent', () => {
  let component: ServentiaComponent;
  let fixture: ComponentFixture<ServentiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServentiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServentiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
