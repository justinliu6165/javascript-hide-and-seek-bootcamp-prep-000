function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").querySelector(".target")
}

function increaseRankBy(n){
  var rank = document.querySelectorAll(".ranked-list");
  for (var i = 0; i < rank.length; i++){
    rank[i].innerHTML = (parseInt(rank[i])+n);
  }
  return rank;
}

