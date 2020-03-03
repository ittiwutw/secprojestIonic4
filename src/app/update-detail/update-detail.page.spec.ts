import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateDetailPage } from './update-detail.page';

describe('UpdateDetailPage', () => {
  let component: UpdateDetailPage;
  let fixture: ComponentFixture<UpdateDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
