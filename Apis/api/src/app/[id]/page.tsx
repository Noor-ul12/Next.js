const DynamicBook = async (props: any) => {
    console.log(props);
    const url = await fetch(`https://simple-books-api.glitch.me/books/${props.params.id}`)
    const responce = await url.json()
    console.log("single book", responce)
    return (
        <h1 className="text-5xl">
            Dynamic Route <br /> <br />
           <h1>Id: {responce.id}</h1>
           <h1>Name: {responce.name}</h1>
           <h1>Author: {responce.author}</h1>
           <h1>type: {responce.type}</h1>
           <h1>Price: {responce.price}</h1>
           <h1>Avalable: {responce.available}</h1>
           
        </h1>
    )
}

export default DynamicBook;
