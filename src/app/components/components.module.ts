import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, HeaderComponent, CaseStudiesComponent, ExperimentsComponent, ContactComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent, HeaderComponent, CaseStudiesComponent, ExperimentsComponent, ContactComponent, FooterComponent
  ]
})
export class ComponentsModule { }
