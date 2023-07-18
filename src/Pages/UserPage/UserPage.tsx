interface IProps {
    name: string,
    email: string,
}

const UserPage:React.FC<IProps> = ({ name, email }) => {
    return (<div>
        <h1>{name}</h1>
        <h2>{email}</h2>
        <form >
            <input type="file" />
            <button>submit</button>
        </form>
        <button>delete</button>
    </div> );
}
 
export default UserPage;