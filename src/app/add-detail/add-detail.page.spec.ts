import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddDetailPage } from './add-detail.page';

describe('AddDetailPage', () => {
  let component: AddDetailPage;
  let fixture: ComponentFixture<AddDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
