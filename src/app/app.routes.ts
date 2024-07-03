import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { FotosComponent } from './fotos/fotos.component';
import { EquipoComponent } from './equipo/equipo.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ContactaComponent } from './contacta/contacta.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'servicios',
        component: ServiciosComponent
    },
    {
        path: 'fotos',
        component: FotosComponent
    },
    {
        path: 'equipo',
        component: EquipoComponent
    },
    {
        path: 'reservas',
        component: ReservasComponent
    },
    {
        path: 'contacta',
        component: ContactaComponent
    }
];

