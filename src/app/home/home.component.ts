import { Component } from '@angular/core';
import {CharacterService} from "../services/personnages.services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  characters: any[] = [];

  constructor(private characterService: CharacterService,
              private router : Router) {}

  async ngOnInit() {
    try {
      await this.characterService.getCharacters().subscribe((response: any) => {
        this.characters = response.data.characters.results;
      });
    }catch (error) {
      console.error('Erreur lors de la récupération des personnages', error);
    }
  }


 decouvrirPersonnage(id: string) {
   this.router.navigateByUrl('personnage/'+id)

  }
}
