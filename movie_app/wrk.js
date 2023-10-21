const key= "https://www.omdbapi.com/?i=tt3896198&apikey=d4ef515"



btn.addEventListener('click',()=>{
    movie_name=document.getElementById("movie").value
    console.log(movie_name)
    btn=document.getElementById("btn")
    run=document.getElementById("run")
    dir=document.getElementById("dir")
    img=document.getElementById("image");
    con=document.getElementById("con")
  
    let url=`http://www.omdbapi.com/?t=${movie_name}&${key}`;
    if(movie_name.length<=0){
        res.innerText="enter a movie name"
    }
    else{
       fetch(url)
           .then((response) => response.json())
            .then( async(data)=>{
                if(data.ok){
                    data=await data.json()
                }
                console.log(data)
            
        
                director=data.Director
              
                dir.innerHTML=`<b style="color:black;width:content-width;flex-wrap:nowrap">Director:</b>${director}`

                run.innerHTML=`<b  style="color:black;">Runtime:</b>${data.Runtime}`
                

                image_src=data.Poster
                console.log(image_src)
                img.setAttribute("src",image_src)

                con.innerHTML=`<label style="color:blue;margin-bottom:1cm;">BOX-OFFICE</label>
                <button style="color:white;background-color:black;padding:0.1cm;">${data.BoxOffice}</button>
               
                <button style="color:white;background-color:black;padding:0.1cm;width:content-width;margin-top:0.4cm;">${data.Language}</button>

                <h3 style="color:teal;margin-top:0.5cm;"><b style="color:black;">Plot:</b>${data.Plot}</h3>
                
                `
                
              

            })
            .catch(e=>{
                res.innerHTML="<h2>Movie does not found</h2>"
            })
    }

})
