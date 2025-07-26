import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { Reviews } from './pages/reviews/reviews';
import { Contact } from './pages/contact/contact';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, Home, Services, Reviews, Contact],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create the Home page', () => {
    const fixture = TestBed.createComponent(Home);
    const home = fixture.componentInstance;
    expect(home).toBeTruthy();
  });

  it('should create the Services page', () => {
    const fixture = TestBed.createComponent(Services);
    const services = fixture.componentInstance;
    expect(services).toBeTruthy();
  });

  it('should create the Reviews page', () => {
    const fixture = TestBed.createComponent(Reviews);
    const reviews = fixture.componentInstance;
    expect(reviews).toBeTruthy();
  });

  it('should create the Contact page', () => {
    const fixture = TestBed.createComponent(Contact);
    const contact = fixture.componentInstance;
    expect(contact).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, frontend');
  });
});
