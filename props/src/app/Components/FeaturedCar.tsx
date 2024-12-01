import Image from "next/image"
export default function FeaturedCar() {
    const Cars = [
        { carImg: "/Corolla.jpg", carName: "ToyotaCorolla", price: "PRK 59.5 - 75.9 lacs" },
        { carImg: "/alto.png", carName: "Suzuki Alto", price: "PRK 23.3 - 30.5 lacs" },
        { carImg: "/Cover.jpg", carName: "Honda Civic", price: "PRK 86.6 - 99.0 lacs" },
        { carImg: "/Honda.jpg", carName: "Suzuki City", price: "PRK 465.3 - 58.5 lacs" },

    ]
    return (
        Cars.map((car) => {
            return (
                <div className="flex flex-row mt-10 px-20  space-x-8 mb-8">
                    <div>

                        <Image className="ml-7" src={car.carImg} alt={"corolla car"} width={250} height={30} />

                        <h2 className="font-bold text-blue-600 text-center">{car.carName}</h2>
                        <h2 className="text-green-500 text-center">{car.price}</h2>
                    </div>
                </div>



            )
        })
    )
}