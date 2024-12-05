import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBoxComponent } from './search-box.component';
import { By } from '@angular/platform-browser';

describe('SearchBoxComponent', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar el placeholder correctamente', () => {
    component.placeholder = 'Buscar aquí...';
    fixture.detectChanges();

    const inputElement: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputElement.placeholder).toBe('Buscar aquí...');
  });

  it('debería emitir el valor al presionar un botón o enviar el formulario', () => {
    spyOn(component.onValue, 'emit');
    const testValue = 'Test Value';

    component.emitValue(testValue);

    expect(component.onValue.emit).toHaveBeenCalledOnceWith(testValue);
  });

  it('debería emitir valores debounced en onDebounce', (done) => {
    spyOn(component.onDebounce, 'emit');
    const testValue = 'Debounced Value';

    component.onKeyPress(testValue);

    setTimeout(() => {
      expect(component.onDebounce.emit).toHaveBeenCalledWith(testValue);
      done();
    }, 350); // Tiempo mayor al debounceTime para garantizar que se emita el evento
  });

  it('debería inicializar con el valor inicial si se establece', () => {
    component.initialValue = 'Valor inicial';
    fixture.detectChanges();

    const inputElement: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputElement.value).toBe('Valor inicial');
  });
});
