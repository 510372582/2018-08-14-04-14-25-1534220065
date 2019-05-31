module.exports = function main(str) {
    var arr=new Array();
    arr[0]=new Array();
    arr[1]=new Array();
    arr[2]=new Array();
var num=str.length;
for(var i=0; i<num;i++){
    if(str[i]==0){
arr[0].push("._.");
        arr[1].push("|.|");
        arr[2].push(|"_|");
    }else if(str[i]==1){
        arr[0].push("...");
        arr[1].push("..|");
        arr[2].push("..|");
    }else if(str[i]==2){
        arr[0].push("._.");
        arr[1].push("._|");
        arr[2].push("|_.");
    }
    else if(str[i]==3){
        arr[0].push("._.");
        arr[1].push("._|");
        arr[2].push("._|");
    }else if(str[i]==4){
        arr[0].push("...");
        arr[1].push("|_|");
        arr[2].push("..|");
    }
    else if(str[i]==5){
        arr[0].push("._.");
        arr[1].push("|_.");
        arr[2].push("._|");
    }
    else if(str[i]==6){
        arr[0].push("._.");
        arr[1].push("|_.");
        arr[2].push("|_|");
    }
    else if(str[i]==7){
        arr[0].push("._.");
        arr[1].push("..|");
        arr[2].push("..|");
    }
    if(str[i]==8){
        arr[0].push("._.");
        arr[1].push("|_|");
        arr[2].push("|_|");
    }
    if(str[i]==9){
        arr[0].push("._.");
        arr[1].push("|_|");
        arr[2].push("..|");
    }

}

    return str;
};