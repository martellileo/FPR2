import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-menu',
  imports: [MenubarModule, AvatarModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  protected items: MenuItem[] | undefined;


  ngOnInit() {
    this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home',
                routerLink: '/',
                // command: () => {
                //     console.log('Clicou em home!');
                // }
            },
            {
                label: 'Vendas',
                icon: 'pi pi-dollar',
                routerLink: '/vendas'
            },
            {
                label: 'Projects',
                icon: 'pi pi-search',
                items: [
                    {
                        label: 'Components',
                        icon: 'pi pi-bolt'
                    },
                    {
                        label: 'Blocks',
                        icon: 'pi pi-server'
                    },
                    {
                        label: 'UI Kit',
                        icon: 'pi pi-pencil'
                    },
                    {
                        label: 'Templates',
                        icon: 'pi pi-palette',
                        items: [
                            {
                                label: 'Apollo',
                                icon: 'pi pi-palette'
                            },
                            {
                                label: 'Ultima',
                                icon: 'pi pi-palette'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Contact',
                icon: 'pi pi-envelope'
            }
        ];
  }
}
