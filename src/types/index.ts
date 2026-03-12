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