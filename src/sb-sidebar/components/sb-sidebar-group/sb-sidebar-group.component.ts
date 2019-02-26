
import { Component, Input } from '@angular/core';
import { SBSidebarGroup } from 'src/sb-sidebar/models/sb-sidebar-group';
import { SBSidebarItem } from 'src/sb-sidebar/models/sb-sidebar-item';
import { SBSidebarComponent } from 'src/sb-sidebar/sb-sidebar.component';

@Component({
    selector: 'sb-sidebar-group',
    templateUrl: './sb-sidebar-group.component.html',
    styleUrls: ['./sb-sidebar-group.component.css'],
})
export class SBSidebarGroupComponent {
    
    /*
     *
     */
    @Input()
    owner: SBSidebarComponent;

    /*
     *
     */
    @Input()
    group: SBSidebarGroup;

    /*
     *
     */
    get isShowGroupTitle(): boolean {
        return this.group && this.group.groupTitle != undefined;
    }

    /*
     *
     */
    get items(): Array<SBSidebarItem> {
        if (!this.group || !this.group.items)
            return [];

        return this.group.items;
    }
}
