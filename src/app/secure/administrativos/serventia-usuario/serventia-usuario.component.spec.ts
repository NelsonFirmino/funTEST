import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServentiaUsuarioComponent } from './serventia-usuario.component';

describe('ServentiaUsuarioComponent', () => {
  let component: ServentiaUsuarioComponent;
  let fixture: ComponentFixture<ServentiaUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServentiaUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServentiaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
