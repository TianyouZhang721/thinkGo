import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheSayListComponent } from './she-say-list.component';

describe('SheSayListComponent', () => {
  let component: SheSayListComponent;
  let fixture: ComponentFixture<SheSayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheSayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheSayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
