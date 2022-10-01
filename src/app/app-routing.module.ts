import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
	{ path: '', redirectTo: 'tickets', pathMatch: 'full' },
	{ path: 'tickets', component: TicketListComponent },
	{ path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
