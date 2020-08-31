import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  menuOpened = false;

  listTitles = [
    {
      trailer: 'assets/videos/ironman.mp4',
      cover: 'assets/images/homem-de-ferro.jpg',
      name: 'Homem de ferro',
      relevance: 98,
      age: 12,
      parts: 2,
      categories: ['Épico', 'Robôs', 'Armaduras'],
    },
    {
      trailer: 'assets/videos/guerracivil.mp4',
      cover: 'assets/images/vingadores-era-de-ultron.jpg',
      name: 'Guerra Civil',
      relevance: 75,
      age: 14,
      parts: 2,
      categories: ['Épico', 'Robôs', 'Armaduras', 'EUA  '],
    },
    {
      trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p',
      cover: 'assets/images/guardios-da-galaxia.jpg',
      name: 'Guerra Civil',
      relevance: 70,
      age: 10,
      parts: 2,
      categories: ['Épico', 'Robôs', 'Armaduras', 'Cosmos'],
    }
  ];

  setMenuState(state: boolean) {
    this.menuOpened = state;
  }

  closeMenu() {
    this.menuOpened = false}
}
