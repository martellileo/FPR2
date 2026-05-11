import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private logged = false;

  public login() {
    this.logged = true;
  }

  public isLogged(): boolean {
    return this.logged;
  }

}
