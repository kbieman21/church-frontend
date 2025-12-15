export interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;     // ISO string from backend
  location: string;
  image?: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}
