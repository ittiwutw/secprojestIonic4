import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddFamilyPage } from './add-family.page';

describe('AddFamilyPage', () => {
  let component: AddFamilyPage;
  let fixture: ComponentFixture<AddFamilyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFamilyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFamilyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
