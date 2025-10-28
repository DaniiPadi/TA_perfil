import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonIcon, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { callOutline, mailOutline, logoGithub, logoLinkedin, trashOutline } from 'ionicons/icons';
import { ModalsService } from '../../components/modals/modals.component';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonButton, IonIcon, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ContactoPage {
  constructor(public modalsService: ModalsService) {
    addIcons({ callOutline, mailOutline, logoGithub, logoLinkedin, trashOutline });
  }

  async eliminarPerfil() {
    console.log('Botón presionado'); 
    const confirmado = await this.modalsService.abrirModalEliminar();
    console.log('Confirmado:', confirmado); 
    
    if (confirmado) {
      await this.modalsService.mostrarToastEliminacion('Perfil eliminado correctamente');
    }
  }
}