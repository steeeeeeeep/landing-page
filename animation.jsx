
const app = document.getElementById('main-page');
function Header({ title }) {
    console.log(title);
    return (<h1>{title ? title: 'Default title'}</h1>)
}

function Homepage(){
    const names = ['pedro', 'juan', 'mateo', 'santiago'];

    const [likes, setLikes] = React.useState(0);

    function hover(){
        setLikes(likes +1);
    }

    return (
        <div>
        <Header title="react"/>

        <ul>
            {names.map((name) => (
                <li key={name}>{name}</li>
            ))}
        </ul>
        <button onClick={hover}>Likes({likes})</button>
        </div>
    )

}
ReactDOM.render(<Homepage />, app);