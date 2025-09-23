import SearchBar from "../layout/SearchBar";
import { Outlet } from "react-router-dom";
const CourseHome = () => {
    return (
        <>
            <SearchBar/>
            <Outlet />
        </>
    );
}
export default CourseHome;