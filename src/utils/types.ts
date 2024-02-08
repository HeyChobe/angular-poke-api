export interface Pokemon {
  id: string;
  name: string;
  order: string;
  sprites: Sprites;
  types: TypeDefinition[];
}

export interface TypeDefinition {
  slot: number;
  type: Type;
}

export interface Type {
  name: string;
  url: string;
}

export interface Sprites {
  front_default: string;
}

export interface ApiAllResult {
  results: ApiResult[];
}

export interface ApiResult {
  name: string;
  url: string;
}
