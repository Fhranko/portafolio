import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRightPortfolioComponent } from './item-right-portfolio.component';

describe('ItemRightPortfolioComponent', () => {
  let component: ItemRightPortfolioComponent;
  let fixture: ComponentFixture<ItemRightPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRightPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRightPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
