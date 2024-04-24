import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedHomeComponent } from './animated-home.component';

describe('AnimatedHomeComponent', () => {
  let component: AnimatedHomeComponent;
  let fixture: ComponentFixture<AnimatedHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
