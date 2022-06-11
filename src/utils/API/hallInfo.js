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
    }
}


export default hallInfo;