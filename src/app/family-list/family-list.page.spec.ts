import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FamilyListPage } from './family-list.page';

describe('FamilyListPage', () => {
  let component: FamilyListPage;
  let fixture: ComponentFixture<FamilyListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FamilyListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
