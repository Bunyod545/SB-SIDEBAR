import { Component, Input } from '@angular/core';
import { SBSidebarItem } from 'src/sb-sidebar/models/sb-sidebar-item';
import { SBSidebarComponent } from 'src/sb-sidebar/sb-sidebar.component';

@Component({
    selector: 'sb-sidebar-item',
    templateUrl: './sb-sidebar-item.component.html',
    styleUrls: ['./sb-sidebar-item.component.css'],
})
export class SBSidebarItemComponent {

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
    get iconClass(): string {
        if (!this.item)
            return "";

        return this.item.iconClass;
    }

    /*
     *
     */
    get title(): string {
        if (!this.item)
            return "";

        return this.item.title;
    }

    /*
     *
     */
    get isShowChild() {
        return this.owner && this.owner.isShowChild;
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
        if (!this.owner.isShowChild) {
            this.owner.onItemClick(this.item);
            event.stopPropagation();
        }
    }
}
