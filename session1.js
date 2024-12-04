
(function main(){
    const ans = findQuad();
    console.log("Answer: ",ans)
  }())
  
  
  function findQuad()
  {
    let x=-4,y=1  
    if(x>0 && y>0)
      {
        return 1
      }
    else if(x<0 && y>0)
      {
        return 2
      }
    else if(x<0 && y<0)
      {
        return 3
      }
    else 
      {
        return 4
      }
  
  return 0
  }
  