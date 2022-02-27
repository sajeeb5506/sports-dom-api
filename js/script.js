const allplayers =() =>{
    document.getElementById('spinner').style.display="block";

    document.getElementById('player-container').innerHTML="";
 
    const inputValue = document.getElementById('input-box').value;
  
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputValue}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>showPlayersData(data.player));

    document.getElementById('input-box').value="";
    document.getElementById('ditels-container').innerHTML="";
}
const showPlayersData =(players)=>{
    if(players){
        document.getElementById('spinner').style.display="none";

    }
    else{
        document.getElementById('spinner').style.display="block"; 
    }
    for(const player of players){
        const parent = document.getElementById('player-container');
        const div = document.createElement('div');
        div.innerHTML=`
        <div class="card p-5 my-3  ">
        <img highr="150px" width="150px" class="rounded-2"src="${player.strThumb}" alt="">
        <h2>Name:${player.strPlayer} </h2>
        <h4>Country: ${player.strNationality}</h4>
        <div class="all-btn">
          <button class="btn btn-danger">Delete</button>
          <button onclick="ditels('${player.idPlayer}')" class="btn btn-primary">Ditels</button>
        </div>
        </div>
        `;
        parent.appendChild(div);
    }
    

} 

const ditels =(id) =>{
   const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>seeDitels(data.players[0]));

}
const seeDitels=(info)=>{
document.getElementById('ditels-container').innerHTML=`
  <div>
  <img highr="250px" width="250px" class="rounded-2"src="${info.strThumb}" alt="">
     <h2>Name: ${info.strPlayer}</h2>
     <h3>Country: ${info.strNationality}</h3>
     <h4>Club: ${info.strTeam}</h4>
     <h4>J.N:${info.strNumber}</h4>
     <h4>Hight: ${info.strWeight}</h4>
   </div>
`
   
    
}