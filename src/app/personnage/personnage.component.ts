import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CharacterService} from "../services/personnages.services";

@Component({
  selector: 'app-personnage',
  templateUrl: './personnage.component.html',
  styleUrls: ['./personnage.component.css']
})
export class PersonnageComponent {
   id !: String;


  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,

  ) {}

  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.params['id'];

    try {
      // @ts-ignore
      await this.characterService.getCharactersByID(this.id).subscribe((response: any) => {
        console.log(response.data);
      });
    } catch (error) {
      console.error('Erreur lors de la récupération du personnage', error);
    }
  }

}
