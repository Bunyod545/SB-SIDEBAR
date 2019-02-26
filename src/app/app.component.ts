import { Component, OnInit } from '@angular/core';
import { SBSidebarOptions } from 'src/sb-sidebar/models/sb-sidebar-options.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  /*
   *
   */
  sideBarOptions: SBSidebarOptions;

  /*
   *
   */
  ngOnInit(): void {
    this.sideBarOptions = {
      data: [
        {
          items: [
            {
              title: "What's new",
              iconClass: "far fa-lightbulb"
            },
            {
              title: "Examples & Playground",
              iconClass: "fas fa-code",
              childs: [
                {
                  title: "Example",
                },
                {
                  title: "Example 2",
                  childs: [
                    {
                      title: "Example 2.1",
                    },
                    {
                      title: "Example 2.2",
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],

      headerTitle: "Menu",
      headerPreviewIconClass: "fas fa-angle-left",
      headerNextIconClass: "fas fa-angle-right"
    }
  }
}
