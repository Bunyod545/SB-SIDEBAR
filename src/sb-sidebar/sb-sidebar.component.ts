import { Component, Input, OnInit, ViewChild, ElementRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { SBSidebarOptions } from './models/sb-sidebar-options.model';
import { SBSidebarGroup } from './models/sb-sidebar-group';
import { SideBarChildsHelper } from './helpers/sidebar-childs-helper';
import { SBSidebarItem } from './models/sb-sidebar-item';

@Component({
    selector: 'sb-sidebar',
    templateUrl: './sb-sidebar.component.html',
    styleUrls: ['./sb-sidebar.component.css'],
})
export class SBSidebarComponent implements OnInit {

    /*
     *
     */
    @Input()
    options: SBSidebarOptions;

    /*
     *
     */
    @ViewChild("content", { read: ViewContainerRef })
    content: ViewContainerRef;

    /*
     *
     */
    childsHelper: SideBarChildsHelper;

    /*
     *
     */
    innerHeaderTitle: string;

    /*
     *
     */
    get headerTitle(): string {
        if (this.innerHeaderTitle)
            return this.innerHeaderTitle;

        if (!this.options)
            return "";

        let getter = this.options.getHeaderTitle;
        if (getter)
            return getter();

        return this.options.headerTitle;
    }

    /*
     *
     */
    get headerPreviewIconClass(): string {
        if (!this.options)
            return "";

        return this.options.headerPreviewIconClass;
    }

    /*
     *
     */
    get groups(): Array<SBSidebarGroup> {
        if (!this.options)
            return [];

        return this.options.data;
    }

    /*
     *
     */
    isShowChild: boolean;

    /**
     *
     */
    constructor(resolver: ComponentFactoryResolver) {
        this.childsHelper = new SideBarChildsHelper(this, resolver);
    }

    /*
     *
     */
    ngOnInit(): void {
    }

    /*
     *
     */
    sidebarHeaderClick() {
        if (this.isShowChild)
            this.childsHelper.removeItem();
    }

    /*
     *
     */
    onItemClick(item: SBSidebarItem) {
        if (item.childs && item.childs.length > 0)
            this.childsHelper.showItem(item);
    }

    /*
     *
     */
    groupsContainerClick() {
        if (this.isShowChild)
            this.childsHelper.removeItems();
    }
}
