import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
    @Input() imageURL: string;
    @Input() status: string;
    @Input() species: string;
    @Input() gender: string;
    @Input() origin: string;
    @Input() location: string;

    constructor(public modalCtrller: ModalController, private myService: DataService) {

    }

    async close() {
        await this.modalCtrller.dismiss();
    }

    ngOnInit() {
    }

}
