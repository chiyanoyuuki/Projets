import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  focused={
    nom:"Albion version 1.0",
    link:"RPG",
    desc:"Projet de jeu de rôle en ligne démarré au début de la période du COVID."
    + "\nDéveloppement en solo de toute la version 1.0 au fur-et-à mesure des sessions de jeu"
  };
  projets=[
    {
      nom:"Albion version 1.0",
      link:"RPG",
      desc:"Projet de jeu de rôle en ligne démarré au début de la période du COVID."
      + "\nDéveloppement en solo de toute la version 1.0 au fur-et-à mesure des sessions de jeu"
    },
    {
      nom:"Albion version 2.0",
      link:"Albion",
      desc:"Projet de jeu de rôle en ligne démarré au début de la période du COVID."
      + "\nDéveloppement en duo avec un débutant en informatique. Formation du profil débutant lors de la programmation."
    },
    {
      nom:"Fate",
      link:"Fate",
      desc:"Projet de Gatcha basé sur le jeu mobile Fate Grand Order. Lui même basé sur le manga Fate."
      + "\nDéveloppement entièrement en solo."
    },
    {
      nom:"Lol Voices",
      link:"LolVoices",
      desc:"Projet de blind test musical basé sur tous les sons du jeu vidéo League of Legends."
      + "\nDéveloppement entièrement en solo."
    },
    {
      nom:"Loup Garou",
      link:"loupGarou",
      desc:"Projet de jeu de société Loup Garou en ligne."
      + "\nDéveloppement entièrement en solo. Images créées par mon petit frère."
    },
    {
      nom:"Words Game",
      link:"wordsGame",
      desc:"Projet de jeu de société en ligne basé sur les définitions du dictionnaire."
      + "\nRécupération des données via un robot RPA créé par mes soins sur différents sites web"
      + "\nDéveloppement entièrement en solo."
    }
  ]
}
