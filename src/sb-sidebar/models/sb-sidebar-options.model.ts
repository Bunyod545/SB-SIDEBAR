import { SBSidebarGroup } from './sb-sidebar-group';

/*
 *
 */
export class SBSidebarOptions {

    /*
     *
     */
    data: Array<SBSidebarGroup>;

    /*
     *
     */
    headerTitle: string;

    /*
     *
     */
    headerPreviewIconClass: string;

    /*
     *
     */
    headerNextIconClass: string;

    /*
     *
     */
    getHeaderTitle?: () => string = undefined;
}