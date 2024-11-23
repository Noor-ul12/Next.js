import Image from "next/image"
export default function FeaturedProduct(){
    return(

<div className="flex lg:flex-row flex-col justify-around mt-32">
            <div className="md:w-5/12 w-full mb-20">
                <Image
                    src="/product1.jpg"
                    alt="Product Three"
                    width={300}
                    height={300}
                />
                <p className="text-center pt-10">PKR 5,000</p>
                <div className="flex justify-center items-center my-3">

                    <button className="px-10 py-4 bg-blue-600 text-white rounded-md">
                        Buy Now
                    </button>
                </div>
            </div>

            <div className="md:w-6/12 w-full mb-20">
                <Image
                    src="/product1.jpg"
                    alt="Product Three"
                    width={300}
                    height={300}
                />
                <p className="text-center pt-10">PKR 5,000</p>
                <div className="flex justify-center items-center my-3">

                    <button className="px-10 py-4 bg-blue-600 text-white rounded-md">
                        Buy Now
                    </button>
                </div>
            </div>

            <div className="md:w-6/12 w-full">
                <Image
                    src="/product1.jpg"
                    alt="Product Three"
                    width={300}
                    height={300}
                />
                <p className="text-center pt-10">PKR 5,000</p>
                <div className="flex justify-center items-center my-3">

                    <button className="px-10 py-4 bg-blue-600 text-white rounded-md">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>

    )
}