import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
export default function Home() {
  return(
    <main>
        <section className=" pt-32">
        <div className="max-w-md">

          <h1 className="text-6xl font-bold">
          your link for <br/> everything</h1>
          <h2 className="text-gray-500 text-xl mt-8 mb-6">
          Share your links, social profiles, contact info and more, on one page
          </h2>
        </div>
        <form className=" inline-flex flex items-center shadow-lg shadow-gray-700/20  " >
        <span className="bg-white py-3 pl-4">
        linklist.to/
        </span>
          <input type="text" className="py-3" placeholder="username"/>
          <button type="submit" className="text-gray-100 border-rounded p-3 bg-blue-500 border-2 ">Join for Free</button>
        </form>
        </section>
    </main>
      )
}
