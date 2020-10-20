function matchesWon(m1)
{
    const result1={};
    for (let match of m1) 
    {
      const  season=match.season;
      const winner=match.winner;
      //console.log(winner);
      if(result1[season])
      {
        if(result1[season][winner])
        {
          result1[season][winner]+=1;
        }
        else
        {
          result1[season][winner]=1;
        }
      }
      else
      {
        result1[season]={};
      }
     
    }
   return result1;
}
module.exports=matchesWon;