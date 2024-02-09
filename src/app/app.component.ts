import { Component, OnInit } from "@angular/core";
import { Pokemon } from "src/utils/types";
import { PokeApiService } from "./poke-api.service";
import { Observable, of } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  pokemons: Observable<Pokemon[]> = of([]);

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokemons = this.pokeApiService.getPokemons();
  }
}
