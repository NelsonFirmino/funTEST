import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecolhimentoComponent } from './recolhimento.component';

describe('RecolhimentoComponent', () => {
  let component: RecolhimentoComponent;
  let fixture: ComponentFixture<RecolhimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecolhimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecolhimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
