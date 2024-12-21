
const Dynamic =async (props: any) => {
    console.log(props);
    const url = await fetch(`https://jsonplaceholder.typicode.com/users/${props.params.id}`)
    const responce = await url.json()
    console.log(responce);
    return(
        <div>
            <h1 className="text-4xl px-20">Name:{responce.name}</h1>
            <h1 className="text-4xl px-20">Id:{responce.id}</h1>
            <h1 className="text-4xl px-20">username:{responce.username}</h1>
            <h1 className="text-4xl px-20">{responce.email}</h1>
        </div>

    )
}

export default Dynamic