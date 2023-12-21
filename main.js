const isPalindrom=function(str){
    return str == str.split('').reverse().join('');
}

let counterTheDateIsPalindrom = 0
for(let month=1;month<=12;month++){
    for(let day=1;day<=31;day++){
        if(day<10&&month<10){//1-9/1-9
            let date = "0"+day+"0"+month
            if(isPalindrom(date)){
                counterTheDateIsPalindrom++
            }
           
        }
        if(day>9&&month<10){//10-30 / 1-9
            let date = day+"0"+month
            if(isPalindrom(date)){
                counterTheDateIsPalindrom++
            }
            
        }
        if(day<10&&month>9){ //1-9/10-12
            let date = "0"+day+month
            if(isPalindrom(date)){
                counterTheDateIsPalindrom++
            }
           
        }
        if(day>9&&month>9){// 10-30 / 10-12
            let date = day+""+month
            if(isPalindrom(date)){
                counterTheDateIsPalindrom++
            }
        

        }
        
    }
}



console.log("how much we have in the year date polindrom : " ,counterTheDateIsPalindrom)