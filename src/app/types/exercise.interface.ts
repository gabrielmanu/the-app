export interface Exercise {
  Id: string;
  Name: string;
  Description: string;
  Levels: ExercisesLevel[];
}

export interface ExercisesLevel {
  Id: string;
  Level: string;
  TargetMin: number;
  TargetMax: number;
}
