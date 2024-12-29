import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiConsumerComponent } from './api-consumer.component';

describe('ApiConsumerComponent', () => {
  let component: ApiConsumerComponent;
  let fixture: ComponentFixture<ApiConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiConsumerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
