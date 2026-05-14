import { exam1_task1 } from './exam1_data';
import { exam1_task1_part2 } from './exam1_data_part2';
import { exam1_task2 } from './exam1_data_part3';
import { exam2_task1 } from './exam2_data';
import { exam2_task1_part2 } from './exam2_data_part2';
import { exam2_task2 } from './exam2_data_part3';
import { exam3_task1 } from './exam3_data';
import { exam3_task1_part2 } from './exam3_data_part2';
import { exam3_task2 } from './exam3_data_part3';
import { exam7Questions } from './exam7_data';
import { exam4Questions } from './exam4_data';

const exam1Questions = [...exam1_task1, ...exam1_task1_part2, ...exam1_task2];
const exam2Questions = [...exam2_task1, ...exam2_task1_part2, ...exam2_task2];
const exam3Questions = [...exam3_task1, ...exam3_task1_part2, ...exam3_task2];

export const practicalExams = [
  {
    id: 'exam1',
    num: 1,
    title: 'Đề thi thực chiến số 1',
    description: `Задание 1 (30 câu) + Задание 2 (10 câu) — Tổng hợp ngữ pháp tiếng Nga`,
    questionCount: 40,
    questions: exam1Questions
  },
  {
    id: 'exam2',
    num: 2,
    title: 'Đề thi thực chiến số 2',
    description: 'Задание 1 (30 câu) + Задание 2 (10 câu) — Tổng hợp ngữ pháp tiếng Nga',
    questionCount: 40,
    questions: exam2Questions
  },
  {
    id: 'exam3',
    num: 3,
    title: 'Đề thi thực chiến số 3',
    description: 'Задание 1 (30 câu) + Задание 2 (10 câu) — Tổng hợp ngữ pháp tiếng Nga',
    questionCount: 40,
    questions: exam3Questions
  },
  {
    id: 'exam4',
    num: 4,
    title: 'Đề thi thực chiến số 4',
    description: 'Задание 1 (20 câu) + Задание 2 (10 câu) — Tổng hợp ngữ pháp tiếng Nga',
    questionCount: 30,
    questions: exam4Questions
  },
  {
    id: 'exam5',
    num: 5,
    title: 'Đề thi thực chiến số 5',
    description: 'Tổng hợp kiến thức ngữ pháp tiếng Nga. (Bài tập đang chờ cập nhật)',
    questionCount: 0,
    questions: []
  },
  {
    id: 'exam6',
    num: 6,
    title: 'Đề thi thực chiến số 6',
    description: 'Tổng hợp kiến thức ngữ pháp tiếng Nga. (Bài tập đang chờ cập nhật)',
    questionCount: 0,
    questions: []
  },
  {
    id: 'exam7',
    num: 7,
    title: 'Đề thi thực chiến số 7',
    description: 'Задание 1 (30 câu) + Задание 2 (10 câu) — Tổng hợp ngữ pháp tiếng Nga',
    questionCount: 40,
    questions: exam7Questions
  }
];
