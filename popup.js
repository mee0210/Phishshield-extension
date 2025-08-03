document.addEventListener('DOMContentLoaded', () => {
  console.log("Popup loaded");
  chrome.tabs.query({active:true, currentWindow:true },function(tabs){
    const currentURL=tabs[0].url;
    console.log("Current tab URL: ",currentURL);
    const result=analyzeURL(currentURL);
    document.querySelector("#status span").textContent= result; //updating the popup text 

    //updating the popup ui
    const span=document.querySelector("#status span");
    span.className="";
    if(result==="Safe")
    {
     span.classList.add("safe");
    } 
    else if (result === "Suspicious") {
    span.classList.add("suspicious");
    }
     else {
    span.classList.add("phishing");
    }
    console.log("Scan result: ",result);
  })

});



function analyzeURL(url){
  let keys=["login","verify","account","secure","update","free","gift","claim","bank"];
  let score=0;
  url = url.toLowerCase(); 
  for(let i=0;i<keys.length;i++)
  {
    if(url.includes(keys[i])){
      score++;
    }

  }
  if(score<2)
  {
    return "Safe";
  }
  else if(score==2)
  {
    return " Suspicious";
  }
  else{
    return "Potential Phishing";
  }
}
