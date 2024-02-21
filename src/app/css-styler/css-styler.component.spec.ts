import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssStylerComponent } from './css-styler.component';

describe('CssStylerComponent', () => {
  let component: CssStylerComponent;
  let fixture: ComponentFixture<CssStylerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssStylerComponent]
    });
    fixture = TestBed.createComponent(CssStylerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
