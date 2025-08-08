import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth implements CanActivate{

isLogin:boolean=true;

  constructor(private r:Router)
  {


  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  

        if(this.isLogin)
    {
      return true;
    }else{
      this.r.navigate(["/login"]);
      return false;
    }



  }
  
}
