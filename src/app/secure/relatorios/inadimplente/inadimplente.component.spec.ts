import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InadimplenteComponent } from './inadimplente.component';

describe('InadimplenteComponent', () => {
  let component: InadimplenteComponent;
  let fixture: ComponentFixture<InadimplenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InadimplenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InadimplenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
