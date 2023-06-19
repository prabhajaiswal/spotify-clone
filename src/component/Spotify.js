export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = 'https://localhost:3000/' ;
const clientId = "8d5a477dd6c64c5ca9ed9ce67b65c065";

const scopes = [
"user-read-currently-playing",
"user-read-recently-played",
"user-read-playback-state",
"user-top-read",
"user-modify-playback-state"

];
export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
     .split('&')
    .reduce((inital,item)=>{
        let parts = item.split('=');
        inital[parts[0]] = decodeURIComponent(parts[1]);
        return inital;
    } , {});
}
 export const loginUrl =` ${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;



 /*Hi , I am Prabha Jaiswal and  i can help you make website . I am front-end Developer  and I am familiar with web-tools like Html , CSS , Javascript    and library of javascript react.js . At below i have share the link of my small api fetching project of crypto and in the project i only focus on functionality more .  It's pleasure to help out .
Thank you


my project link at master branch i have made cryptocurrency simple api data fetch site https://github.com/prabhajaiswal/Cryptocurrency.git



I am okay with budget i am just looking for work to learn and discover something new and to begin .
This is my github profile    https://github.com/prabhajaiswal
*/
