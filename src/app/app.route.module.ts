import { Routes, RouterModule } from '@angular/router';
import{AppComponent} from './app.component';
import{ChildComponent} from './child/child.component';
import{ChlidtwoComponent} from './chlidtwo/chlidtwo.component'
import { NgModule } from '@angular/core';
const appRoutes:Routes=[
    {path:'',component:AppComponent},
    {path:'child',component:ChildComponent},
    {path:'childTwo',component:ChlidtwoComponent}
];
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRouteModule{
    
}