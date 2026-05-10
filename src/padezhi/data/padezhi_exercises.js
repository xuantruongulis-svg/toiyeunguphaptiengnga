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

import { foundation_1_5 } from './ex_foundation_1_5';
import { foundation_2_full } from './ex_foundation_2_full';
import { foundation_6_10 } from './ex_foundation_6_10';
import { foundation_11_15 } from './ex_foundation_11_15';
import { foundation_16_20 } from './ex_foundation_16_20';

export const padezhiExercises_1 = [
  ...foundation_1_5.filter(ex => ex.id !== 'f2'),
  foundation_2_full,
  ...foundation_6_10,
  ...foundation_11_15,
  ...foundation_16_20,
  ...anecdoteExercises,
  ...genitiveExtraExercises,
  ...genitiveExercises
].sort((a, b) => {
  const getNum = (id) => {
    const match = id.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };
  const numA = getNum(a.id);
  const numB = getNum(b.id);
  if (numA !== numB) return numA - numB;
  return a.id.localeCompare(b.id);
});

export const padezhiExercises_2 = [
  ...dativeExtraExercises,
  ...dativeExercises,
  ...accusativeExtraExercises,
  ...accusativeExercises
].sort((a, b) => parseInt(a.num) - parseInt(b.num));

export const padezhiExercises_3 = [
  ...instrumentalExtraExercises,
  ...instrumentalExercises,
  ...prepositionalExtraExercises,
  ...prepositionalExercises,
  ...mixedExercises,
  ...testExercises
].sort((a, b) => parseInt(a.num) - parseInt(b.num));

export const padezhiExercises = [
  ...foundation_1_5,
  ...foundation_6_10,
  ...foundation_11_15,
  ...foundation_16_20,
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
].sort((a, b) => {
  const getNum = (id) => {
    const match = id.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };
  const numA = getNum(a.id);
  const numB = getNum(b.id);
  if (numA !== numB) return numA - numB;
  return a.id.localeCompare(b.id);
});
