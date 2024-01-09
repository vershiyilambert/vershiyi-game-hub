import Genre from "./Genre";
import Platform from "./Platform";

export default interface GameQuery {
  platform: Platform | null;
  genre: Genre | null;
  sortOrder: string;
  searchText: string;
}
