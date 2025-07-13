import {Component} from '@angular/core';
@Component({
  selector:'pm-root',
  template:`<h1>
                {{myTitle}}
                <div>Welcome By Rishi</div>
            </h1>`
})
export class AppComponent
{
  myTitle:String="First Angular Component";
}