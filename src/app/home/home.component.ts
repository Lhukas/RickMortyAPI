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
  currentPage : number = 1;
  maxPages : number = 0

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
    if(this.currentPage < this.maxPages) {
      this.currentPage = this.currentPage + 1;
      this.refreshList(this.currentPage)
    }
  }

  prevPage() {
    if(this.currentPage > 1){
      this.currentPage = this.currentPage - 1;
      this.refreshList(this.currentPage)
    }

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
