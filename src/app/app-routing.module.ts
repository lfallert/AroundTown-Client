import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { EventListComponent } from './event-list/event-list.component'
import { EventFormComponent } from './event-form/event-form.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  // {path: 'list-user', redirectTo: '/', pathMatch: 'full'},
  { path: 'events', component: EventListComponent },
  {path: 'addevent', component: EventFormComponent},
  { path: 'searchresults', component: SearchResultsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}