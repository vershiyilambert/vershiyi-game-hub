import Platform from "../entities/Platform";
import useData from "./useData";

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
