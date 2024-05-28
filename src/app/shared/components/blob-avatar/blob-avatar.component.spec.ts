import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlobAvatarComponent } from './blob-avatar.component';

describe('BlobAvatarComponent', () => {
  let component: BlobAvatarComponent;
  let fixture: ComponentFixture<BlobAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlobAvatarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlobAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
