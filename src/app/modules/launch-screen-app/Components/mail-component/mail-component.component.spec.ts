import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailComponentComponent } from './mail-component.component';

describe('MailComponentComponent', () => {
  let component: MailComponentComponent;
  let fixture: ComponentFixture<MailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
