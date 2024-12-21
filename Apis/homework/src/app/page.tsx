import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const url = await fetch("https://jsonplaceholder.typicode.com/users")
  const responce = await url.json()
  console.log(responce)
  return (
    <main>
      {
        responce.map((res: any) => {
          return (
            <div>
              {
                <Link href={`${res.id}`}>
                  <h1 className="text-5xl text-center underline ">name:   
                    {res.name}

                  </h1>
                </Link>
              }
            </div>
          )
        })
      }
    </main>
  );
}
