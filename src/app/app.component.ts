import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  interval:any;
  img = 0;
  focused={
    alias:"albion1",
    imgs:2,
    nom:"Albion version 1.0",
    link:"RPG",
    desc:"Projet de jeu de rôle en ligne démarré au début de la période du COVID."
    + "<br/>Développement en solo de toute la version 1.0 au fur-et-à mesure des sessions de jeu"
  };
  projets=[
    {
      alias:"albion1",
      imgs:2,
      nom:"Albion version 1.0",
      link:"RPG",
      desc:"Projet de jeu de rôle en ligne démarré au début de la période du COVID."
      + "<br/>Développement en solo de toute la version 1.0 au fur-et-à mesure des sessions de jeu"
    },
    {
      alias:"albion2",
      imgs:2,
      nom:"Albion version 2.0",
      link:"Albion",
      desc:"Projet de jeu de rôle en ligne démarré au début de la période du COVID."
      + "<br/>Développement en duo avec un débutant en informatique. Formation du profil débutant lors de la programmation."
    },
    {
      alias:"fate",
      imgs:3,
      nom:"Fate",
      link:"Fate",
      desc:"Projet de Gatcha basé sur le jeu mobile Fate Grand Order. Lui même basé sur le manga Fate."
      + "<br/>Développement entièrement en solo."
    },
    {
      alias:"lolmates",
      imgs:3,
      nom:"Lol Mates",
      link:"none",
      desc:"Projet mobile de récupération de données du jeu League of Legends"
      + "<br/>Application disponible sur Android"
    },
    {
      alias:"lolvoices",
      imgs:1,
      nom:"Lol Voices",
      link:"LolVoices",
      desc:"Projet de blind test musical basé sur tous les sons du jeu vidéo League of Legends."
      + "<br/>Développement entièrement en solo."
    },
    {
      alias:"loup",
      imgs:1,
      nom:"Loup Garou",
      link:"loupGarou",
      desc:"Projet de jeu de société Loup Garou en ligne."
      + "<br/>Développement entièrement en solo. Images créées par mon petit frère."
    },
    {
      alias:"mizcamper",
      imgs:3,
      nom:"Miz Camper",
      link:"MizCamper",
      desc:"Projet pour des particuliers"
      + "<br/>Site de réservation et d'informations pour des vans aménagés en Corse"
    },
    {
      alias:"morgathemes",
      imgs:2,
      nom:"MorgaThemes",
      link:"MorgaThemes",
      desc:"Projet de calcul de thèmùe astral."
      + "<br/>Développement entièrement en solo. Données générées par chat GPT"
      + "<br/> + de 60.000 lignes de données, calcul rapide"
    },
    {
      alias:"tinder",
      imgs:1,
      nom:"Tinder Robot",
      link:"none",
      desc:"Projet de récupération automatique des conversations tinder"
    },
    {
      alias:"volley",
      imgs:3,
      nom:"Volley",
      link:"none",
      desc:"Projet de gestion d'un club de volleyball"
      + "<br/>Gestion des séances et des absences pour les entrainements"
      + "<br/>Prise de stats d'un match en direct"
      + "<br/>Compte rendu des performances des joueurs en direct"
    },
    {
      alias:"words",
      imgs:1,
      nom:"Words Game",
      link:"wordsGame",
      desc:"Projet de jeu de société en ligne basé sur les définitions du dictionnaire."
      + "<br/>Récupération des données via un robot RPA créé par mes soins sur différents sites web"
      + "<br/>Développement entièrement en solo."
    }
  ]

  ngOnInit()
  {
    this.startInterval();
  }

  startInterval()
  {
    this.img = 0;
    clearInterval(this.interval);
    if(this.focused.imgs==1)return;
    this.interval = setInterval(()=>{
      if(this.img<this.focused.imgs-1)
        this.img++;
      else
        this.img = 0;
    },1000);
  }
}
