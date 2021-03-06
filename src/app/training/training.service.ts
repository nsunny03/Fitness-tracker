import {Subject, Subscription} from 'rxjs';
import {Exercise} from '../training/training/exercise.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable()
export class TrainingService {
    exerciseChanged = new Subject<Exercise>();
    exercisesChanged = new Subject<Exercise[]>();
    private availableExercises: Exercise[] = [];
    private runningExercise: Exercise;
    private exercises: Exercise[] = [];

    constructor(private db: AngularFirestore) {}

    fetchAvailableExercises() {
      this.db.collection('Exercises')
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
    }).subscribe((exercises: Exercise[]) => {
      console.log(exercises);
      this.availableExercises = exercises;
      this.exercisesChanged.next([...this.availableExercises]);
    } );
    }

    startExercise(selectedId: string) {
      this.runningExercise = this.availableExercises.find(
        ex => ex.id === selectedId
      );
      this.exerciseChanged.next({ ...this.runningExercise });
    }

    completeExercise() {
      this.addDataToDatabase({
        ...this.runningExercise,
        date: new Date(),
        state: 'completed'
      });
      this.runningExercise = null;
      this.exerciseChanged.next(null);
    }

    cancelExercise(progress: number) {
      this.addDataToDatabase({
        ...this.runningExercise,
        duration: this.runningExercise.duration * (progress / 100),
        calories: this.runningExercise.calories * (progress / 100),
        date: new Date(),
        state: 'cancelled'
      });
      this.runningExercise = null;
      this.exerciseChanged.next(null);
    }

    getRunningExercise() {
      return { ...this.runningExercise };
    }

    getCompletedOrCancelledExercises() {
      return this.exercises.slice();
    }

    private addDataToDatabase(exercise: Exercise) {
      this.db.collection('finishedExercise').add(exercise);
    }
  }

