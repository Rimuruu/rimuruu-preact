const Route = {
    home : '/',
    gallery :'gallery',
    games : 'games',
    about : '/about_me'
}
const Navbar = ()=>{

return (
    <div>
        <div>

        </div>
        <div>
            <a href={Route.home}>Home</a>
            <a href={Route.gallery}>Gallery</a>
            <a href={Route.games}>Games</a>
            <a href={Route.about}>About me</a>
        </div>
    </div>
    
)

};

export default {Navbar,Route};