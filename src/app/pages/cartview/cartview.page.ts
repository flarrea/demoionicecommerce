import { CartService }from 'src/app/services/cart.service';
import { Product } from '../../models/cart';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cartview',
  templateUrl: './cartview.page.html',
  styleUrls: ['./cartview.page.scss'],
})
export class CartviewPage implements OnInit {

  //product: any;

  cart: Product[] = [];

  constructor(private cartService:CartService, private modalCtrl: ModalController, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }
 
  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }
 
  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }
 
  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }
 
  close() {
    this.modalCtrl.dismiss();
  }

  carddetails() {
    this.close();
    this.cartService.restartCartItemCount();
    this.router.navigate(['/payments']);
  }

  /*

  async checkout() {
    // Perfom PayPal or Stripe checkout process
 
    let alert = await this.alertCtrl.create({
      header: 'Gracias por comprar!',
      message: 'Enviaremos su pedido lo antes posible',
      buttons: ['OK']
    });
    alert.present().then(() => {
      this.modalCtrl.dismiss();
    });
  }
 */
}

