
function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  visualizeMatchesWon(data.matchesWon);
  visualizeExtraRuns2016(data.etraRuns2016);
  visualizeEconomicBowlers2015(data.econimicBowlers2015);
  visualizeStory(data.story);
  return;
}

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "1.Total number of Matches Played Per each Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
      
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Years",
        data: seriesData
      }
    ],
 
  });
}


function visualizeMatchesWon(matchesWon) {
  const year1 = [];
  const kkr=[];
  const rcb=[];
  const csk=[];
  const kxp=[];
  const rr=[];
  const dd=[];
  const mi=[];
  const dc=[];
  const ktk=[];
  const pw=[];
  const nr=[];
  const sh=[];
  const rps=[];
  const gl=[];
  const dcl=[];
  for (let year in matchesWon) {
    year1.push(year);
    
  }
  for(let year in matchesWon)
  {
    kkr.push(matchesWon[year]["Kolkata Knight Riders"]||0);
    rcb.push(matchesWon[year]["Royal Challengers Bangalore"]||0);
    csk.push(matchesWon[year]["Chennai Super Kings"]||0);
    kxp.push(matchesWon[year]["Kings XI Punjab"]||0);
    rr.push(matchesWon[year]["Rajasthan Royals"]||0);
    dd.push(matchesWon[year]["Delhi Daredevils"]||0);
    mi.push(matchesWon[year]["Mumbai Indians"]||0);
    dc.push(matchesWon[year]["Deccan Chargers"])||0;
    ktk.push(matchesWon[year]["Kochi Tuskers Kerala"]||0);
    pw.push(matchesWon[year]["Pune Warriors"]||0);
    nr.push(matchesWon[year][""]||0);
    sh.push(matchesWon[year]["Sunriser Hyderabad"]||0);
    rps.push(matchesWon[year]["Rising Pune Supergiants"]||0);
    gl.push(matchesWon[year]["Gujarat Lions"]||0);
    dcl.push(matchesWon[year]["Delhi Capitals"]||0);
  }

  Highcharts.chart("matches-won", {
      chart: {
          type: 'column'
      },
      title: {
          text: '2. Number of matches won by each team over all years of ipl'
      },
      subtitle: {
          text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
          categories: year1,
          crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Matches won'
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      series: [
        {
          name: "Kolkata Knight Riders",
          data: kkr,
  
      }, 
      {
          name: "Royal Challengers Bangalore",
          data: rcb,
  
      }, 
      {
          name: "Chennai Super Kings",
          data: csk,
  
      }, 
      {
          name: "Kings XI Punjab",
          data: kxp,
  
      }, 
      {
        name: "Rajasthan Royals",
        data: rr,

      }, 
      {
        name: "Delhi Daredevils",
        data: dd,

      },
      {
        name: "Mumbai Indians",
        data: mi,
      },
      {
        name: "Deccan Chargers",
        data: dc,
      },
      {
        name: "Kochi Tuskers Kerala",
        data: ktk,

      },
      {
        name: "Pune Warriors",
        data: pw,

      },
      {
        name: "no result",
        data: nr,
      },
      {
        name: "Sunrisers Hyderabad",
        data: sh,

      },
      {
        name: "Rising Pune Supergiants",
        data: rps,

      },
      {
        name: "Gujarat Lions",
        data: gl,

      },
      {
        name: "Delhi Capitals",
        data: dcl,

      },
    ],
  });
}

function visualizeExtraRuns2016(extraRuns2016) {
  //console.log(extraRuns2016);
  
  var eruns=[];
  for(let team in extraRuns2016)
  {
    
    eruns.push([team,extraRuns2016[team]]) ;  
  }


  
  Highcharts.chart("extra-runs-2016", {
    chart: {
        type: 'column'
    },
    title: {
        text: '3.Extra runs conceded by each team in 2016'
    },
    subtitle: {
        text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Extra Runs'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Extra Runs: <b>{point.y}</b>'
    },
    series: [{
        name: 'Extraruns',
        data: eruns,
        dataLabels: {
            enabled: true,
            rotation: 0,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});
}

function visualizeEconomicBowlers2015(eb2015) {
  
  
  


  
  Highcharts.chart("top-economic-bowlers-2015", {
    chart: {
        type: 'column'
    },
    title: {
        text: '4.Top Economic Bowlers in 2015 season'
    },
    subtitle: {
        text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Economy'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Economy: <b>{point.y:.2f}</b>'
    },
    series: [{
        name: 'Economic Bowlers',
        data: eb2015,
        dataLabels: {
            enabled: true,
            rotation: 0,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.2f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});
}

function visualizeStory(story) {

  console.log(story);
  var venue1=[];
  var seriesData=[];
  var ar=[];
  var b=[];
  var res={};

  
  
  for (let venue in story) {
    venue1.push(venue);
    
      ar.push(story[venue]);
    
  }
  
  console.log(venue1);
  console.log(ar);
  for(var d of ar)
  {
    for(var r in d)
    {
      
      if(b.indexOf(r)===-1)
      {
        b.push(r);
      }
    }
  }
  console.log(b);
  for(var v1 in story)
  {
    for(var t1 in v1)
    {
      if(res[t1])
      {
        console.log(res[t1]);
        //res[t1]=res[t1].push(v1[t1]);
      }
      else
      { 
        
        res[t1]=[].push(v1[t1]);
      }
    }
  }
  console.log(res);
//   for(var k in b )
//   {
//     var name=b[k];
//     var ar2=[];
//     for(var d1 of ar)
//    {
//     for(var r1 in d1)
//     {
//       if(r1==name)
//       {
//         ar2.push(d1[r1]);
        
//       }
      
          
//     }
   
//   }
//   let resfinal={};
//     resfinal["name"]=name;
//     resfinal["data"]=ar2;
//     seriesData.push(resfinal);
// }

console.log(seriesData);

  
  



  

  Highcharts.chart("story", {
    chart: {
        type: 'bar'
    },
    title: {
        text: '5.Story: Matches won by each team per venue'
    },
    xAxis: {
        categories: venue1
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Matches won v/s Stadium'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    },
    series:seriesData
});
              

}