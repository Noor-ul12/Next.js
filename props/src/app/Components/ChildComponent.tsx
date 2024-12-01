const ChildComponet = (props:any) =>{
    console.log(props);
    return(
        <div>
            <h1 className="text-5xl p-2">
                {props.name}
            </h1>
            <p className=" text-4xl p-2">
                {props.classDay}
            </p>
            <p  className="text-3xl p-2">
                {props.roll}
            </p>
            <p className=" text-3xl p-2">
                {props.add}
            </p>

        </div>
    )
}
export default ChildComponet;