import { useAuth } from "hooks";

interface IProps {
    data: any
}

const Bookmarked: React.FC<IProps> = ({ data }): JSX.Element => {
    const {user} = useAuth()
    


    return (<div>{typeof data === "string" ? <h1>{data}</h1> :
    
        data.filter(({ title }: any) => user.bookmarked.includes(title)).map(({ _id, title, thumbnail, year, category, rating }: any) => <li key={_id}>
            <p>{title}</p>
            <p>{year}</p>
            <p>{category}</p>
            <p>{rating }</p>
        </li>)
    }</div>);
}
 
export default Bookmarked;