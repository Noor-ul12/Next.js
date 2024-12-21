import Image from "next/image";
import Link from "next/link";

export default async function Home() {

 const url = await fetch("https://simple-books-api.glitch.me/books")
  const responce = await url.json()
  console.log(responce)
  return (
    <div>
      {
        responce.map((books: any) => {
          return (
            <div>
              <Link href={`${books.id}`}>
                <h1 className="text-6xl text-center underline ">{books.name} &nbsp;  </h1>
              </Link>
            </div>
          )
        })
      }
    </div>
  );

 
}
