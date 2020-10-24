export default interface OrphanageModel {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  approved: boolean;
  images: Array<{
    id: string;
    url: string;
  }>;
}
