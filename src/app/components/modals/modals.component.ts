import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButtons, IonIcon } from "@ionic/angular/standalone";
import { ModalController, ToastController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeOutline, checkmarkCircleOutline, trashOutline } from 'ionicons/icons';

// Registrar íconos globalmente
addIcons({ closeOutline, checkmarkCircleOutline, trashOutline });

//Información
@Component({
  selector: 'app-modal-info',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Información</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="cerrar()">✕</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header><ion-card-title>Acerca de la App</ion-card-title></ion-card-header>
        <ion-card-content>
          <p>App desarrollada con Ionic y Angular.</p>
          <p>Versión: 1.0.0</p>
          <ion-button expand="block" (click)="cerrar()">Cerrar</ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  `,
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButtons, CommonModule]
})
export class ModalInfoComponent {
  constructor(private modalCtrl: ModalController) {}
  cerrar() { this.modalCtrl.dismiss(); }
}

//Eliminar Perfil
@Component({
  selector: 'app-modal-confirmar',
  template: `
    <ion-header>
      <ion-toolbar color="danger">
        <ion-title>Eliminar Perfil</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="cerrar(false)">✕</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header><ion-card-title>¿Estás seguro?</ion-card-title></ion-card-header>
        <ion-card-content>
          <p><strong>Esta acción eliminará tu perfil permanentemente.</strong></p>
          <div style="display: flex; gap: 10px; margin-top: 20px;">
            <ion-button expand="block" color="medium" (click)="cerrar(false)">
              Cancelar
            </ion-button>
            <ion-button expand="block" color="danger" (click)="cerrar(true)">
              Eliminar
            </ion-button>
          </div>
        </ion-card-content>
      </ion-card>
    </ion-content>
  `,
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButtons, CommonModule]
})
export class ModalConfirmarComponent {
  constructor(private modalCtrl: ModalController) {}
  cerrar(confirmado: boolean) { this.modalCtrl.dismiss(confirmado); }
}

//Ayuda
@Component({
  selector: 'app-modal-ayuda',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>❓ Ayuda</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="cerrar()">✕</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header><ion-card-title>¿Necesitas ayuda?</ion-card-title></ion-card-header>
        <ion-card-content>
          <p><strong>Contacto:</strong> Ve a contacto.</p>
          <p><strong>Perfil:</strong> Actualiza tu información.</p>
          <ion-button expand="block" (click)="cerrar()">Entendido</ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  `,
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButtons, CommonModule]
})
export class ModalAyudaComponent {
  constructor(private modalCtrl: ModalController) {}
  cerrar() { this.modalCtrl.dismiss(); }
}

// SERVICIO
@Injectable({ providedIn: 'root' })
export class ModalsService {
  constructor(
    private modalCtrl: ModalController, 
    private toastCtrl: ToastController
  ) {}

  async abrirModalInfo() {
    console.log('Abriendo modal info...');
    const modal = await this.modalCtrl.create({ 
      component: ModalInfoComponent 
    });
    await modal.present();
  }

  async abrirModalEliminar() {
    console.log('Abriendo modal eliminar...');
    const modal = await this.modalCtrl.create({ 
      component: ModalConfirmarComponent 
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log('Modal cerrado, data:', data);
    return data;
  }

  async abrirModalAyuda() {
    console.log('Abriendo modal ayuda...');
    const modal = await this.modalCtrl.create({ 
      component: ModalAyudaComponent 
    });
    await modal.present();
  }

  async mostrarToastExito(mensaje: string) {
    console.log('Mostrando toast éxito:', mensaje);
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2500,
      position: 'top',
      color: 'success'
    });
    await toast.present();
  }

  async mostrarToastEliminacion(mensaje: string) {
    console.log('Mostrando toast eliminación:', mensaje);
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2500,
      position: 'top',
      color: 'danger'
    });
    await toast.present();
  }
}

@Component({ selector: 'app-modals', template: '', standalone: true })
export class ModalsComponent {}