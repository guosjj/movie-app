/**
 * 这个文件专门对接后端的电影相关接口
 */

import axiosInstance from "../axiosInstance";

const movieInfo ={
    /**
     * 获取最受欢迎的电影
     */
    getPraiseMovie(){
        return axiosInstance.get("/movie-info/getPraiseMovie")
    },
    getListByPage({pageIndex,tags,movie_name}){
        return axiosInstance.get("/movie-info/getListByPage",{
            params:{
                pageIndex,
                tags,
                movie_name
            }
        })
    },
    getMovieById(id){
        return axiosInstance.get("/movie-info/findById/"+id)
    }
}

export default movieInfo;