import Genre from "../entities/Genre";
import useData from "./useData";

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
