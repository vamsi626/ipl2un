function extraRuns2016(matches,deliveries)
{
    const id1=[]
    const res1={};
    
    for(let match of matches)
    {
        let season=match.season;
        if(season==2016)
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
                let bteam=delivery["bowling_team"];
                let eruns=delivery["extra_runs"];
                let x=parseInt(eruns);
                //console.log(x);
                if(res1[bteam])
                {   
                    res1[bteam]+=x;
                }
                else
                {
                    
                    res1[bteam]=x;
                }
            }
        }


    }
    return res1;
}
module.exports= extraRuns2016;