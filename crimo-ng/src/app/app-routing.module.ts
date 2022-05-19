import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TeamComponent } from './components/pages/team/team.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServiceDetailsComponent } from './components/pages/service-details/service-details.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ProjectDetailsComponent } from './components/pages/project-details/project-details.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import {AnimalDetailsComponent} from './components/pages/animal-details/animal-details.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'team', component: TeamComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'service-details', component: ServiceDetailsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'project-details', component: ProjectDetailsComponent },
    { path: 'coming-soon', component: ComingSoonComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog-details', component: BlogDetailsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'animal-details', component: AnimalDetailsComponent },
    // Here add new pages component

    { path: '**', component: NotFoundComponent } // This line will remain down from the whole pages component list
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
