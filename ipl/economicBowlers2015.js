function economicBowlers2015(matches,deliveries)
{
    const id1=[]
    const res={};
    const as=[];
    const as1=[];
    for(let match of matches)
    {
        let season=match.season;
        if(season==2015)
        {
            id1.push(match.id)
        }
    }
    
    for(let delivery of deliveries)
    {
        const d1=delivery.match_id;
        for(var i in id1)
        {
            if(d1==id1[i])
            {
                let bowler=delivery["bowler"]
                let totalruns=parseInt(delivery["total_runs"]);
                
                if(res[bowler])
                {
                    res[bowler]["totalruns"]+=totalruns;
                    if(delivery.ball==6)
                    {
                        res[bowler]["overs"]+=1;
                    }
                }
                else
                {
                    res[bowler]={}
                    res[bowler]["totalruns"]=totalruns;
                    res[bowler]["overs"]=0;
                    
                }
            }
        }
        

    }
   
    for(let prop in res)
    {
       
        var f=res[prop]["totalruns"]/res[prop]["overs"];
        as.push([prop,f]);
    }
    as.sort(function(a,b){return a[1]-b[1]});
    for(var i=0;i<12;i++)
    {
        as1.push(as[i]);
    }

    return as1;
}
module.exports= economicBowlers2015;