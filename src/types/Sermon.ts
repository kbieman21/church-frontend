export interface Sermon {
  _id: string;
  title: string;
  pastor: string;
  videoUrl?: string;
  audioUrl?: string;
  notes?: string;
  date: string;      // ISO date string
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}
