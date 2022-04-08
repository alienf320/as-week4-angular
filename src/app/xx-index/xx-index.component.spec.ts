import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XxIndexComponent } from './xx-index.component';

describe('XxIndexComponent', () => {
  let component: XxIndexComponent;
  let fixture: ComponentFixture<XxIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XxIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XxIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
