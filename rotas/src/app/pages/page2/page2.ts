import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-page2',
  imports: [RouterLink],
  templateUrl: './page2.html',
  styleUrl: './page2.css',
})
export class Page2 {
  // route params
  private route = inject(ActivatedRoute);

  // dynamic data
  private router = inject(Router)

  constructor() {
    // route params
    const id = this.route.snapshot.params['id'];
    console.log(id);

    // dynamic data
    console.log(this.router.currentNavigation()?.extras.state);

    // query params
    // http://localhost:4200/page2/1?name=Leo&idade=20
    console.log(this.route.snapshot.queryParamMap.get('nome'));
    console.log(this.route.snapshot.queryParamMap.get('idade'));
    console.log(this.route.snapshot.queryParams);
  }
}
  