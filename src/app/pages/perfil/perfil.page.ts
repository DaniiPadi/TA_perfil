import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonInput, IonButton, IonCardTitle, IonItem, IonIcon, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { eyeOutline, eyeOffOutline, helpCircleOutline } from 'ionicons/icons';
import { ModalsService } from '../../components/modals/modals.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonIcon, IonItem, IonCardTitle, IonButton, IonInput, IonCardContent, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PerfilPage {
  showPassword = false;
  nombre = '';
  correo = '';
  password = '';

  constructor(public modalsService: ModalsService) {
    addIcons({ eyeOutline, eyeOffOutline, helpCircleOutline });
  }

  togglePassword() { this.showPassword = !this.showPassword; }

  async guardarCambios() {
    await this.modalsService.mostrarToastExito('Datos guardados exitosamente');
    this.nombre = ''; this.correo = ''; this.password = ''; this.showPassword = false;
  }
}