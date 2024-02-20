import { Component } from '@angular/core';
import {CharacterService} from "../services/personnages.services";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  characters: any[] = [];

  constructor(private characterService: CharacterService) {}

  async ngOnInit() {
    try {
      await this.characterService.getCharacters().subscribe((response: any) => {
        this.characters = response.data.characters.results;
        console.log(this.characters)
      });
    }catch (error) {
      console.error('Erreur lors de la récupération des personnages', error);
    }


  }


  async decouvrirPersonnage(id: string) {
    try {
      await this.characterService.getCharactersByID(id).subscribe((response: any) => {
        console.log(response.data);
      });
    } catch (error) {
      console.error('Erreur lors de la récupération du personnage', error);
    }

  }
}
