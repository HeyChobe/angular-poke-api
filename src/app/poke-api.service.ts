import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiAllResult, Pokemon, ApiResult } from "src/utils/types";

@Injectable({
  providedIn: "root",
})
export class PokeApiService {
  private baseUrl = "https://pokeapi.co/api/v2/pokemon/";

  pokemons: Pokemon[] = [];

  constructor(private http: HttpClient) {}

  getPokemons() {
    this.http.get<ApiAllResult>(this.baseUrl).subscribe(({ results }) => {
      results.map((pokemonResult: ApiResult) => {
        this.http.get<Pokemon>(pokemonResult.url).subscribe((pokemon) => {
          this.pokemons.push(pokemon);
        });
      });
    });

    return this.pokemons;
  }

  getPokemonByName() {}
}
