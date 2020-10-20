function story(m1)
{
    const result1={};
    for (let match of m1) 
    {
      const  venue=match.venue;
      const winner=match.winner;
      //console.log(winner);
      if(result1[venue])
      {
        if(result1[venue][winner])
        {
          result1[venue][winner]+=1;
        }
        else
        {
          result1[venue][winner]=1;
        }
      }
      else
      {
        result1[venue]={};
      }
     
    }
   return result1;
}
module.exports=story;