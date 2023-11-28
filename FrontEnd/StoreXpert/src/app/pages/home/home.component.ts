import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaImgComponent } from "../../components/galeria-img/galeria-img.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, GaleriaImgComponent]
})
export class HomeComponent {

}
