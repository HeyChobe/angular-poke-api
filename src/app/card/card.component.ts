import { Component, Input } from "@angular/core";
import { Pokemon } from "src/utils/types";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent {
  @Input() pokemon: Pokemon | undefined;
}
