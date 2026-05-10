import { prichastieExercises } from './ex_prichastie';
import { deeprichastieExercises } from './ex_deeprichastie';

export const formyGlagolaExercises = [
  ...prichastieExercises,
  ...deeprichastieExercises
].sort((a, b) => parseInt(a.num) - parseInt(b.num));
