import './Navbar.css'
interface RouteType {path:string};
type RouteDict = {
    [key:string]:RouteType
}

const Route : RouteDict = {
    home : {path:'/'},
    gallery :{path:'gallery'},
    games : {path:'games'},
    about : {path:'/about_me'}
}
const Navbar = ()=>{

return (
    <div id="nav-bar">
        <div id="nav-logo"></div>
        <div id="nav-links">
            <a href={Route.home.path}>Home</a>
            <a href={Route.gallery.path}>Gallery</a>
            <a href={Route.games.path}>Games</a>
            <a href={Route.about.path}>About me</a>
        </div>
    </div>
    
)

};

export default {Navbar,Route};