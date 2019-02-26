import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SBSidebarComponent } from './sb-sidebar.component';
import { CommonModule } from '@angular/common';
import { SBSidebarItemComponent } from './components/sb-sidebar-item/sb-sidebar-item.component';
import { SBSidebarGroupComponent } from './components/sb-sidebar-group/sb-sidebar-group.component';
import { SBSidebarChildComponent } from './components/sb-sidebar-child/sb-sidebar-child.component';
import { SBSidebarChildGroupComponent } from './components/sb-sidebar-child-group/sb-sidebar-child-group.component';

@NgModule({
    declarations: [
        SBSidebarComponent,
        SBSidebarGroupComponent,
        SBSidebarItemComponent,
        SBSidebarChildComponent,
        SBSidebarChildGroupComponent
    ],
    exports: [
        SBSidebarComponent,
        SBSidebarGroupComponent,
        SBSidebarItemComponent,
        SBSidebarChildComponent,
        SBSidebarChildGroupComponent
    ],
    imports: [
        BrowserModule,
        CommonModule
    ],
    entryComponents: [SBSidebarChildGroupComponent],
})
export class SBSidebarModule { }
