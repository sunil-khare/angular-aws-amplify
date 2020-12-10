import { Component, OnInit } from '@angular/core';
import { DataStore } from '@aws-amplify/datastore';
import { TEST } from '../models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myamplifyapp';

  async ngOnInit() {

    await DataStore.save(
      new TEST({
        "FirstName": "Lorem ipsum dolor sit amet",
        "LastName": "Lorem ipsum dolor sit amet"
      })
    );
    const models = await DataStore.query(TEST);
    console.log(models);
  }
}
