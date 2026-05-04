import { anecdoteExercises } from './ex_anecdotes';
import { genitiveExtraExercises } from './ex_genitive_extra';
import { genitiveExercises } from './ex_genitive';
import { dativeExtraExercises } from './ex_dative_extra';
import { dativeExercises } from './ex_dative';
import { accusativeExtraExercises } from './ex_accusative_extra';
import { accusativeExercises } from './ex_accusative';
import { instrumentalExtraExercises } from './ex_instrumental_extra';
import { instrumentalExercises } from './ex_instrumental';
import { prepositionalExtraExercises } from './ex_prepositional_extra';
import { prepositionalExercises } from './ex_prepositional';
import { mixedExercises } from './ex_mixed';
import { testExercises } from './ex_tests';

export const padezhiExercises = [
  ...anecdoteExercises,
  ...genitiveExtraExercises,
  ...genitiveExercises,
  ...dativeExtraExercises,
  ...dativeExercises,
  ...accusativeExtraExercises,
  ...accusativeExercises,
  ...instrumentalExtraExercises,
  ...instrumentalExercises,
  ...prepositionalExtraExercises,
  ...prepositionalExercises,
  ...mixedExercises,
  ...testExercises
].sort((a, b) => parseInt(a.num) - parseInt(b.num));
