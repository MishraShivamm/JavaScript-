const requestURL = "https://api.github.com/users/hiteshchoudhary"
    const  request = new XMLHttpRequest();
    request.open('GET',requestURL)
    request.onreadystatechange = () =>{
        console.log(request.readyState);
        if(reuest.readyState === 4){
            const data = JSON.parse(this.responseText)
            console.log(data.followers);
        }
    }
    //console.log(request.readyState);
    request.send();