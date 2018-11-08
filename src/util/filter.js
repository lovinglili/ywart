import Vue from 'vue'

Vue.filter("insertDot",(val)=>{
    var _val=val.toString();
    _val=_val.split("").reverse()
    for (var i=0;i<_val.length-1;i++){
        if(i%3==2){
            _val.splice(i+1,0,",");
        }
    }
   _val= _val.reverse().join("");
     return _val;
})