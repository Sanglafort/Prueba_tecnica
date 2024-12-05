import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { RouterModule } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent, RouterModule], // Importar RouterModule para permitir el uso de routerLink
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente SidebarComponent', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar los enlaces de navegación', () => {
    const compiled = fixture.debugElement.nativeElement;

    // Verifica que los enlaces estén presentes en el DOM
    const links = compiled.querySelectorAll('a');
    expect(links.length).toBeGreaterThan(0); // Verifica que haya al menos un enlace

    // Verifica que los enlaces tengan las rutas correctas
    expect(links[0].getAttribute('routerLink')).toBe('/home');
    expect(links[1].getAttribute('routerLink')).toBe('/about');
    expect(links[2].getAttribute('routerLink')).toBe('/contact');
  });
});
