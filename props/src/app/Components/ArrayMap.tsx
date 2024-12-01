
const ArryMap = () => {

    // const fruits = ["Apple","Mamgo","orange"]
     const fruits = [
        { fruitName: "Apple", price: 200},
        { fruitName: "Mongo", price: 300},
        { fruitName: "Orange", price: 400},
        { fruitName: "waterMaloen", price: 500}

     ]
     const Cars =[
        {carName: "toyota", carModle: 2010},
        {carName: "Civic", carModle: 2015},
        {carName: "Fort", carModle: 2018},
        {carName: "suzuki", carModle: 2020}
     ]
    
    return(
        <div>
            {
                fruits.map((fruit) => {
                    return(
                        <div className="border my-5 border-black">
                            <h1>
                                {fruit.fruitName}
                            </h1>
                            <p>
                                {fruit.price}
                            </p>

                        </div>
                    )
                })

            
            }
            {
                Cars.map((car) =>{
                    return(
                        <div>
                            <h1 className=" text-center text-4xl text-blue-800 mb-2 ">{car.carName}</h1>
                            <p className="text-center text-2xl">{car.carModle}</p>
                        </div>
                    )
                })
            }
        

        </div>
        
    )
}

export default ArryMap;