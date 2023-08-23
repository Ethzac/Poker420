import { Component } from '@angular/core';
import { tr } from './../util'
import { Joueur } from './../modele/joueur'

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent 
{
  connexionVisible=true;
  joueurConnecte = new Joueur();

  creationCompte()
  {
    tr("Création de compte");
  }

  connexion()
  {
    tr("Connexion");
  }
}
