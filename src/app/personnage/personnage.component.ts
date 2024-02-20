import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CharacterService} from "../services/personnages.services";

@Component({
  selector: 'app-personnage',
  templateUrl: './personnage.component.html',
  styleUrls: ['./personnage.component.css']
})
export class PersonnageComponent {
   id !: String;
  character: any;


  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private router : Router,

  ) {}

  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.params['id'];

    try {
      // @ts-ignore
      await this.characterService.getCharactersByID(this.id).subscribe((response: any) => {
        this.character = response.data.character;
        console.log(response.data);
        console.log(this.character.name);
      });
    } catch (error) {
      console.error('Erreur lors de la récupération du personnage', error);
    }
  }

  retourHome() {
    this.router.navigateByUrl('')
  }
}
