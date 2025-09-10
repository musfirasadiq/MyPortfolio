import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';   // ✅ Needed for *ngIf
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, // ✅ Fix for *ngIf
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  template: `
    <!-- Header -->
    <mat-toolbar color="primary" class="mat-elevation-z4 toolbar">
      <span class="logo">Musfira L A Portfolio</span>
      <span class="spacer"></span>

      <!-- Desktop nav -->
      <nav class="nav-links">
        <button mat-button (click)="scrollTo('about')">About</button>
        <button mat-button (click)="scrollTo('skills')">Skills</button>
        <button mat-button (click)="scrollTo('experience')">Experience</button>
        <button mat-button (click)="scrollTo('projects')">Projects</button>
        <button mat-button (click)="scrollTo('contact')">Contact</button>
      </nav>

      <!-- Mobile menu icon -->
      <button mat-icon-button class="menu-btn" (click)="toggleMenu()">
        <mat-icon>menu</mat-icon>
      </button>
    </mat-toolbar>

    <!-- Mobile dropdown menu -->
    <nav class="mobile-menu" *ngIf="isMenuOpen">
      <button mat-button (click)="scrollTo('about')">About</button>
      <button mat-button (click)="scrollTo('skills')">Skills</button>
      <button mat-button (click)="scrollTo('experience')">Experience</button>
      <button mat-button (click)="scrollTo('projects')">Projects</button>
      <button mat-button (click)="scrollTo('contact')">Contact</button>
    </nav>

    <!-- Main sections -->
    <main>
      <section id="about"><app-about></app-about></section>
      <section id="skills"><app-skills></app-skills></section>
      <section id="experience"><app-experience></app-experience></section>
      <section id="projects"><app-projects></app-projects></section>
      <section id="contact"><app-contact></app-contact></section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2025 Musfira L A. All Rights Reserved.</p>
    </footer>
  `,
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.isMenuOpen = false; // ✅ auto-close after navigation
  }
}
