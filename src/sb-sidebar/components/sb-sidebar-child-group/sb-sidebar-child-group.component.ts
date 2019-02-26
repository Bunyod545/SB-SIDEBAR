
import { Component, ElementRef, ViewChild } from '@angular/core';
import { SBSidebarItem } from 'src/sb-sidebar/models/sb-sidebar-item';
import { SBSidebarComponent } from 'src/sb-sidebar/sb-sidebar.component';

@Component({
    selector: 'sb-sidebar-child-group',
    templateUrl: './sb-sidebar-child-group.component.html',
    styleUrls: ['./sb-sidebar-child-group.component.css'],
})
export class SBSidebarChildGroupComponent {

    /*
     *
     */
    @ViewChild("container")
    container: ElementRef;
    
    /*
     *
     */
    owner: SBSidebarComponent;

    /*
     *
     */
    item: SBSidebarItem;

    /*
    *
    */
    get items(): Array<SBSidebarItem> {
        if (!this.item || !this.item.childs)
            return [];

        return this.item.childs;
    }

    /**
     *
     */
    constructor(private elRef: ElementRef) {
        
    }

    /*
     *
     */
    destroy() {
        this.container.nativeElement.style.animationName = "move-right";
        this.container.nativeElement.style.left = "100%";
    }
}
