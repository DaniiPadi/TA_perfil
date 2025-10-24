import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonInput, IonButton, IonCardTitle, IonItem, IonIcon, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonIcon, IonItem, IonCardTitle, IonButton, IonInput, IonCardContent, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PerfilPage implements OnInit {

  showPassword = false;
  nombre = '';
  correo = '';
  password = '';

  constructor() {
    addIcons({ eyeOutline, eyeOffOutline });
  }

  ngOnInit() {
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  async guardarCambios() {
    await this.mostrarAlerta();
    this.limpiarCampos();
  }

  async mostrarAlerta() {
    return new Promise((resolve) => {
      const alert = document.createElement('ion-alert');
      alert.header = '¡Éxito!';
      alert.message = 'Los cambios se han guardado correctamente.';
      alert.buttons = [
        {
          text: 'OK',
          handler: () => {
            resolve(true);
          }
        }
      ];
      
      document.body.appendChild(alert);
      alert.present();
    });
  }

  limpiarCampos() {
    this.nombre = '';
    this.correo = '';
    this.password = '';
    this.showPassword = false;
  }

}