import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { AdminComponent } from './components/admin/admin.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { ApartadoComponent } from './components/apartado/apartado.component';
import { ReservacionComponent } from './components/reservacion/reservacion.component';
import { BookingComponent } from './components/booking/booking.component';
import { CabanaComponent } from './components/cabana/cabana.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { CobrosComponent } from './components/cobros/cobros.component';
import { RecuperarComponent } from './componentes/recuperar/recuperar.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ReservacionAdminComponent } from './components/reservacion-admin/reservacion-admin.component';
import { SellerComponent } from './componenets/seller/seller.component';




const routes: Routes = [
    {
        path: "",
        redirectTo: "/principal",
        pathMatch: "full"
    },
    {
        path: 'principal',
        component: PrincipalComponent,
    },
    {
        path: 'navigation',
        component: NavigationComponent
    },
    {
        path: 'footer',
        component: FooterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [

            {
                path: 'navigation',
                component: NavigationComponent
            },
            {
                path: 'footer',
                component: FooterComponent
            },
            {
                path: 'cliente',
                component: ClienteComponent,
            },
            {
                path: 'admin',
                component: AdminComponent,
            },
            {
                path: 'reserva',
                component: ReservaComponent,
            },
            {
                path: 'apartado',
                component: ApartadoComponent,
            },
            {
                path: 'reservacion',
                component: ReservacionComponent,
            },
            {
                path: 'booking',
                component: BookingComponent,
            },
            {
                path: 'cabana',
                component: CabanaComponent,
            },
            {
                path: 'cobros',
                component: CobrosComponent,
            },
            {
                path: 'recuperar',
                component: RecuperarComponent,
            },
            {
                path: 'usuario',
                component: UsuarioComponent,
            },
            {
                path: 'reservacionAdmin',
                component: ReservacionAdminComponent,
            },
            {
                path: 'seller',
                component: SellerComponent,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }