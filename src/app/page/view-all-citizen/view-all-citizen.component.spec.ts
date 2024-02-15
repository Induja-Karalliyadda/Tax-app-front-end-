import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllCitizenComponent } from './view-all-citizen.component';

describe('ViewAllCitizenComponent', () => {
  let component: ViewAllCitizenComponent;
  let fixture: ComponentFixture<ViewAllCitizenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllCitizenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAllCitizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
