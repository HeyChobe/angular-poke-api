import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiAllResult, Pokemon } from "src/utils/types";
import { Observable, forkJoin, mergeMap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PokeApiService {
  private baseUrl = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<ApiAllResult>(this.baseUrl).pipe(
      mergeMap(response => 
        forkJoin(response.results.map(pokemon => 
          this.http.get<Pokemon>(pokemon.url)
        ))
      )
    );
  }

  getPokemonByName() {}
}
