import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRenderComponent } from './data-render.component';

describe('DataRenderComponent', () => {
  let component: DataRenderComponent;
  let fixture: ComponentFixture<DataRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataRenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
