import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    someData: any;
    
    constructor(private modalCtrller: ModalController, private myService: DataService) {
    }

    async presentModal(charData) {
        const modal = await this.modalCtrller.create({
            component: ModalPage,
            componentProps: {
                'imageURL': charData.imageUrl,
                'status': charData.status,
                'species': charData.species,
                'gender': charData.gender,
                'origin': charData.origin,
                'location': charData.location
            }
        });
        await modal.present();
    }

    characterInfo(charData) {
        this.presentModal(charData);
        console.log("Who is " + JSON.stringify(charData.name).replace(/"/g,"")+"?");
    }

    ngOnInit() {
        this.someData = this.myService.getMappedData();
        setTimeout(() => {
            this.someData = this.someData["__zone_symbol__value"];
        }, 1000);
    }
}
