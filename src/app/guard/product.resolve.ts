import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Product} from '../product/product.component';
import {Injectable} from '@angular/core';

@Injectable()
export class ProductResolve implements Resolve<Product> {

  constructor(private router: Router) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let productId: number = route.params['id'];

    if (1 == productId) {
      return new Product(1, 'iPhone 7');
    } else {
      this.router.navigate(['/home']);
      return undefined;
    }
  }

}
