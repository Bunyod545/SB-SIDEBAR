
import { Component, Input } from '@angular/core';
import { SBSidebarComponent } from 'src/sb-sidebar/sb-sidebar.component';
import { SBSidebarItem } from 'src/sb-sidebar/models/sb-sidebar-item';

@Component({
    selector: 'sb-sidebar-child',
    templateUrl: './sb-sidebar-child.component.html',
    styleUrls: ['./sb-sidebar-child.component.css'],
})
export class SBSidebarChildComponent {
    /*
     *
     */
    @Input()
    owner: SBSidebarComponent;

    /*
     *
     */
    @Input()
    item: SBSidebarItem;

    /*
     *
     */
    get title(): string {
        return this.item && this.item.title;
    }

    /*
     *
     */
    get isHasChild(): boolean {
        return this.item &&
               this.item.childs &&
               this.item.childs.length > 0;
    }

    /*
     *
     */
    get headerNextIconClass(): string {
        return this.owner &&
            this.owner &&
            this.owner.options &&
            this.owner.options.headerNextIconClass;
    }

    /*
     *
     */
    contentClick(event) {
        this.owner.onItemClick(this.item);
        event.stopPropagation();
    }
}
