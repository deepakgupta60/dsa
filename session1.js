
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
  

//   ================= natural summ

function findQuad()
{
  let n=10;
  
  return n*(n+1)/2
 
}


// find max / or min

function findQuad()
{
  let arr = [2,3,20,5,10]
  let n1=arr[0]
  
  for(let i=0;i<arr.length;i++)
    {
      if(n1>arr[i]) // 2< 
        {
          n1=arr[i]
        }
    }
  return n1
 
}
