/**
 * 这个文件专门对接影厅信息相关接口
 */


import axiosInstance from "../axiosInstance"

const hallInfo = {
     /**
     * 获取影厅信息
     */
    getAllList(){
        return axiosInstance.get("/hall-info/getAllList")
    },
    // 分页获取影厅信息
    getListByPage({pageIndex,hail_name}){
        return axiosInstance.get(`/hall-info/getListByPage`,{
            params:{
                pageIndex,
                hail_name
            }
        })
    }
}


export default hallInfo;