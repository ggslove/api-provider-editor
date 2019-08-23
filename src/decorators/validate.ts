interface ValidateOption{
  body?:any;
  

}

//方法上的校验
export function validate(
  validateOption:ValidateOption
){
  return function(routeFun:Function){
    if(validateOption.body){
    
    }
    
  }
 
}