import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TransacaoFormatadaComponent } from './transacao-formatada.component';


describe('TransacaoFormatadaComponent', () => {
  let component: TransacaoFormatadaComponent;
  let fixture: ComponentFixture<TransacaoFormatadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransacaoFormatadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransacaoFormatadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
