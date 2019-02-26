import { SBSidebarComponent } from '../sb-sidebar.component';
import { SBSidebarItem } from '../models/sb-sidebar-item';
import { ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { SBSidebarChildGroupComponent } from '../components/sb-sidebar-child-group/sb-sidebar-child-group.component';

/*
 *
 */
export class SideBarChildsHelper {

    /*
     *
     */
    sidebar: SBSidebarComponent;

    /*
     *
     */
    resolver: ComponentFactoryResolver;

    /*
     *
     */
    showChilds: Array<ComponentRef<SBSidebarChildGroupComponent>> = [];

    /**
     *
     */
    constructor(sidebar: SBSidebarComponent, resolver: ComponentFactoryResolver) {
        this.sidebar = sidebar;
        this.resolver = resolver;
    }

    /*
     *
     */
    showItem(item: SBSidebarItem) {
        let resolver = this.resolver;
        let content = this.sidebar.content;

        let factory = resolver.resolveComponentFactory(SBSidebarChildGroupComponent);
        let componentRef = content.createComponent(factory);
        componentRef.instance.owner = this.sidebar;
        componentRef.instance.item = item;

        this.showChilds.push(componentRef);
        this.sidebarConfigure();
    }

    /*
     *
     */
    removeItems() {
        while (this.showChilds.length > 0)
            this.removeItem()
    }

    /*
     *
     */
    removeItem() {
        let componentRef = this.showChilds.pop();
        componentRef.instance.destroy();
        setTimeout(() => componentRef.destroy(), 2000)
        this.sidebarConfigure();
    }

    /*
     *
     */
    sidebarConfigure() {
        let length = this.showChilds.length;
        this.sidebar.isShowChild = length > 0;

        this.sidebar.innerHeaderTitle = length > 0 ? 
        this.showChilds[length -1].instance.item.title : 
        undefined;
    }
}