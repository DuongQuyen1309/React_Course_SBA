const BASE_URL = "http://localhost:3333"

export const getCourseApi = async () => {
    try{
        const response = await fetch(`${BASE_URL}/courses`); 
        if(!response.ok){
            throw new Error(`Http error! status: ${response.statusText}`);
        }   
        const data = await response.json();
        return data;
    }
    catch(error){
        throw error;
    }
};