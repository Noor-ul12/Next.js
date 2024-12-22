import Image from "next/image";
const HeroSection = () => {
    return(
        <div className="flex flex-wrap justify-center items-center gap-4 p-6">
        {/* Left Section */}
        <section className="bg-green-200 w-full md:w-2/5 h-auto md:h-96 flex flex-col justify-center items-center p-6 rounded-lg shadow-md">
          <h1 className="text-center font-bold text-green-500 text-4xl md:text-6xl mb-4">
            Cosmetic Item
          </h1>
          <p className="text-center text-lg md:text-xl text-gray-700 mb-6">PKR 5,000</p>
          <button className="px-10 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
            Buy Now
          </button>
        </section>
      
        {/* Right Section */}
        <section className="bg-gray-200 w-full md:w-2/5 h-auto md:h-96 flex justify-center items-center p-6 rounded-lg shadow-md">
          <Image
            src="/product1.png"
            alt="Product Three"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </section>
      </div>
      
    )
}

export default HeroSection;