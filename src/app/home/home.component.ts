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
  currentPage : Number = 1;
  maxPages : Number = 0

  constructor(private characterService: CharacterService,
              private router : Router) {}

  async ngOnInit() {
    try {
      await this.characterService.getCharacters(this.currentPage).subscribe((response: any) => {
        this.characters = response.data.characters.results;
        this.maxPages = response.data.characters.info.pages;
      });
    }catch (error) {
      console.error('Erreur lors de la récupération des personnages', error);
    }
  }


 decouvrirPersonnage(id: string) {
   this.router.navigateByUrl('personnage/'+id)

  }

  nextPage() {
    this.currentPage = 2;
    this.refreshList(this.currentPage)
  }

  prevPage() {
    this.currentPage = 3;
    this.refreshList(this.currentPage)
  }


  async refreshList(numberPage:Number) {
    try {
      await this.characterService.getCharacters(this.currentPage).subscribe((response: any) => {
        this.characters = response.data.characters.results;
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des personnages', error);
    }
  }
}
