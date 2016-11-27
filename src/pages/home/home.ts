import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  jobs: FirebaseListObservable<any>;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, fb: AngularFire) {
    this.jobs = fb.database.list('/jobs');
  }

  createJob() {
    let prompt = this.alertCtrl.create({
      title: 'Create Job',
      message: "Enter a name and job",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'job',
          placeholder: 'Job'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.jobs.push(data);
          }
        }
      ]
    });
    prompt.present();
  }

  editJob(job){
    let prompt = this.alertCtrl.create({
      title: 'Create Job',
      message: "Change a name and job",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: job.name
        },
        {
          name: 'job',
          placeholder: 'Job',
          value: job.job
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.jobs.update(job.$key, data);
          }
        }
      ]
    });
    prompt.present();
  }

  delete(id: string) {
    this.jobs.remove(id);
  }

}
