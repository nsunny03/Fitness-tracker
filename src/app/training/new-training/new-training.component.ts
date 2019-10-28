import { Component, OnInit, OnDestroy, EventEmitter, Output} from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../training/exercise.model';
import { NgForm } from '@angular/forms';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  exercises: Observable<Exercise[]>;

  constructor(private trainingService: TrainingService,
              private db: AngularFirestore) { }

  ngOnInit() {
    // this.exercises = this.trainingService.getAvailableExercises();
    this.exercises = this.db.collection('Exercises')
    .snapshotChanges()
    .map(docArray => {
     return docArray.map((doc: any) => {
        return {
          id: doc.payload.doc.id,
          name: doc.payload.doc.data().name,
          duration: doc.payload.doc.data().duration,
          calories: doc.payload.doc.data().calories
        };
      });
    });

  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }


}
