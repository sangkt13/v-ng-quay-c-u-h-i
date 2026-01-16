
import { QuestionSet } from './types';

export const QUESTION_SETS: QuestionSet[] = [
  {
    id: 1,
    title: "TỔ HỢP 1",
    color: "#0D9488", // Teal 600
    questions: [
      "Hãy giải thích chẩn đoán YHHĐ một cách rõ ràng, chi tiết từ cơ chế bệnh sinh, mức độ bệnh đến triệu chứng chưa hợp lý với chẩn đoán.",
      "Hãy giải thích rõ ràng, chi tiết về lý do chỉ định dùng thuốc YHCT.",
      "Hãy giải thích rõ ràng và chi tiết lý do của kế hoạch dự phòng."
    ]
  },
  {
    id: 2,
    title: "TỔ HỢP 2",
    color: "#0284C7", // Sky 600
    questions: [
      "Hãy giải thích chẩn đoán YHHĐ một cách rõ ràng, chi tiết từ cơ chế bệnh sinh, mức độ bệnh đến triệu chứng chưa hợp lý với chẩn đoán.",
      "Hãy giải thích rõ ràng, chi tiết về lý do chỉ định không dùng thuốc YHCT.",
      "Hãy giải thích rõ ràng và chi tiết lý do của kế hoạch dự phòng."
    ]
  },
  {
    id: 3,
    title: "TỔ HỢP 3",
    color: "#7C3AED", // Violet 600
    questions: [
      "Hãy biện luận chẩn đoán YHCT một cách rõ ràng, chi tiết từ cơ chế bệnh đến triệu chứng chưa hợp lý với chẩn đoán.",
      "Hãy giải thích rõ ràng, chi tiết về lý do chỉ định dùng thuốc YHHĐ.",
      "Hãy giải thích rõ ràng và chi tiết lý do của kế hoạch dự phòng."
    ]
  },
  {
    id: 4,
    title: "TỔ HỢP 4",
    color: "#EA580C", // Orange 600
    questions: [
      "Hãy biện luận chẩn đoán YHCT một cách rõ ràng, chi tiết từ cơ chế bệnh đến triệu chứng chưa hợp lý với chẩn đoán.",
      "Hãy giải thích rõ ràng, chi tiết về lý do chỉ định không dùng thuốc YHHĐ.",
      "Hãy giải thích rõ ràng và chi tiết lý do của kế hoạch dự phòng."
    ]
  }
];

export const SPIN_DURATION = 4000; // ms
export const FULL_SPINS = 10;
