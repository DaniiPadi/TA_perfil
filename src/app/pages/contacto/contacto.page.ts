import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonIcon, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { callOutline, mailOutline, logoGithub, logoLinkedin } from 'ionicons/icons';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonButton, IonIcon, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ContactoPage implements OnInit {

  constructor() {
    addIcons({ callOutline, mailOutline, logoGithub, logoLinkedin });
  }

  ngOnInit() {
  }

}