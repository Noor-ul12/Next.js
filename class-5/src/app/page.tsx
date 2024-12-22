import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav className="flex w-full bg-black h-32 items-center">
        <div className="bg-purple-700 h-10 w-96"></div>

        <div className="flex justify-end w-3/5 items-center">
          <div className="bg-green-700 h-10 w-44"></div>
          <div className="bg-yellow-700 h-10 w-44"></div>
          <div className="bg-orange-400 h-10 w-44"></div>
        </div>

      </nav>

      <div className="flex gap-20 mt-20 items-center justify-center" >
        <div className=" w-2/5 h-72 bg-green-500 " ></div>
        <div className=" w-2/5 h-72 bg-green-500 " ></div>
      </div>
      <div className="flex items-center justify-center mt-20 gap-10">
        <div className="w-1/4 h-72 bg-red-400"></div>
        <div className="w-1/4 h-72 bg-red-400"></div>
        <div className="w-1/4 h-72 bg-red-400"></div>
      </div>


    </div>
  );
}
