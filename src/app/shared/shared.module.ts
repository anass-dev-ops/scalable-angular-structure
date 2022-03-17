import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NavbarComponent, SidebarComponent],
  imports: [CommonModule, RouterModule, MatButtonModule],
  exports: [NavbarComponent, SidebarComponent, MatButtonModule],
})
export class SharedModule {}
