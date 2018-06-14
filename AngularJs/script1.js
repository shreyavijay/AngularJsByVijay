function deleteOdd(list){
 
    do{
        
    }while(list.next)

    var prev = list;
   var count =0;
    while(list){
        if(count ===0 && list.val % 2 !== 0){
            prev = list;
        } else {
            if(list.val % 2 !== 0) {
                var nextNode = list.next;
                list = prev;
                list.next = nextNode;
            }   
                
        }
        prev = list;
        list = list.next;


    }


}
function braces(brace){
    var braceArray = brace.split("");
    var target = [];
    var count = 0;
    braceArray.forEach(function(element) {
        if((element === '}' && target[target.length-1] ===  '{')
                  || (element === ']' && target[target.length-1] ===  '[')
                  || (element === ')' && target[target.length-1] ===  '('))
        {
            target.pop();
        } else {
            target.push(element);
        }

        count++;
    }, this);

    var result = target.length === 0 ? 'YES' : 'No';
    return result;
}
