import dayjs from "dayjs"
export const formatDateTime = (str,split="YYYY-MM-DD")=>{
    let d = dayjs(str); //将原来的日期字符串转换为dayjs对象
    if(d.isValid()){ //如果是一个合法的字符串
        return d.format("YYYY-MM-DD HH:mm:ss");
    }else{
        return "";
    }
}