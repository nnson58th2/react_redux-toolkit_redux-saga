export interface Student {
  id?: string;
  age: number;
  city: string;
  gender: 'male' | 'female';
  mark: number;
  name: string;

  createdAt?: number;
  updatedAt?: number;
}
