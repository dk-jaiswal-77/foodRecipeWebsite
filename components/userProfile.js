async function userProfile(username, token)
{
    try{
        let profile_url = `https://masai-api-mocker.herokuapp.com/user/${username}`;
        let response = await fetch(profile_url, {
            method : "GET", 
            headers : {
                "Content-Type" : "application/json",
                Authorization : `Bearer ${token}`
            }
        });

        let response_data = await response.json();
    
        // console.log(response_data);
    }
    catch(error){
        console.log(error);
    }
}

//userProfile(username, response_data.token); ---- hint for calling userProfile

export default userProfile;