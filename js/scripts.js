function drawTree(size){
   for (i = 1; i < (size + 1); i++){
       var star = '';
       for (j = 0; j < i; j++ ){
           star += '*';
           
       }
       console.log(star);
   } 
}
drawTree(5);
