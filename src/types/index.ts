export interface Stat {
  title: string;
  value: string;
  description: string;
}

export interface QuickAction {
  title: string;
  description: string;
  href: string;
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  description: string;
  period: string;
}

export interface Section {
  id: string;
  subjectId: string;
  name: string;
  schedule: string;
  modality: string;
  classroom: string;
  capacity: number;
}

export interface Planning {
  id: string;
  subjectId: string;
  sectionId: string;
  title: string;
  objective: string;
  content: string;
  date: string;
}

export interface Evaluation {
  id: string;
  subjectId: string;
  sectionId: string;
  title: string;
  type: string;
  percentage: number;
  date: string;
  description: string;
}

export interface Student {
  id: string;
  subjectId: string;
  sectionId: string;
  fullName: string;
  idNumber: string;
  email: string;
}