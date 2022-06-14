/**
 * 这个文件专门对接排片相关接口
 */

 import axiosInstance from "../axiosInstance";

 const planInfo ={
     /**
      * 获取排片
      */
      getListByMid(id){
         return axiosInstance.get(`/plan-info/getListByMid/`+id);
     },
     findById(id){
        return axiosInstance.get(`/plan-info/findById/`+id);
     }
 }
 
 export default planInfo;