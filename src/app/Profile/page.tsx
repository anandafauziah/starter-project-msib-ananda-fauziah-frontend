import Image from "next/image";
import { FaFacebook, FaLinkedin, FaGoogle, FaFacebookF, FaRegEnvelope} from "react-icons/fa";
import Head from 'next/head';
import { MdLockOutline} from "react-icons/md";
import styles from './page.module.css';


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Image
          src='/regis.jpg' // Lokasi gambar di dalam direktori public
          alt="Deskripsi Gambar" // Deskripsi gambar (opsional)
          layout="fill" // Mengisi seluruh parent element
          objectFit="cover" // Memastikan gambar terisi seluruh area tanpa distorsi
        />
      <Head>
        <title>My First Next</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 md:px-20 text-center">
        <div className="z-20 bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-2xl flex flex-col md:flex-row w-full md:w-2/3 max-w-4xl">
          {/* Sign in form */}
          <div className="flex flex-col">
            
          </div>
          <div className=" w-full md:w-3/5 p-5 flex flex-col justify-center items-center">

          <h2 className="text-3xl font-bold text-slate-700 mb-2 ">
              Account Profile
            </h2>
            <div className="border-2 w-10 border-slate-700 inline-block mb-12"></div>

            {/* <div className="text-left font-bold">
            <span className="text-slate-700">Company </span>Name
            </div> */}
            
            <div className=""></div>
            {/* <div className="flex justify-center my-2">
              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaFacebookF/>
              </a>
              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaLinkedin/>
              </a>
              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaGoogle/>
              </a>
            </div> */}
            {/* <p className="text-gray-400 my-3">or use your email</p> */}
            <div className="flex justify-center items-center flex-col ">
            <input type="input" name="name" placeholder="Name" className="bg-gray-200 outline-none text-sm flex-1 py-2 px-12 rounded-lg mb-3 w-full"/>
            <input type="email" name="email" placeholder="Email" className="bg-gray-200 outline-none text-sm flex-1 py-2 px-12 rounded-lg mb-3 w-full"/>
            <input type="password" name="password" placeholder="Password" className="bg-gray-200 outline-none text-sm flex-1 py-2 px-12 rounded-lg  mb-3 w-full"/>
      
              {/* <div className="justify-between flex w-full md:w-64 my-5 ">
                <label className="flex items-center text-xs"><input type="checkbox" name="remember" className="mr-1"/>Remember Me</label>
                <a href="#" className="text-xs">Forgot Password?</a>
              </div> */}
              <a href="Register" className="bg-slate-700 text-white border-2 border-slate-700 rounded-full px-20 py-1 inline-block font-semibold hover:bg-white hover:text-slate-700 text-center mt-4 w-full">Save Edit</a>
            </div>
          </div>
          {/* End if Sign  in form */}
          


          {/*Hello Side */}
          <div className="w-full md:w-2/5 bg-white bg-opacity-5 backdrop-blur-lg text-white rounded-tr-2xl rounded-br-2xl py-8 px-6 md:py-36 md:px-12">
            <Image
              src='/avatar.png' // Lokasi gambar di dalam direktori public
              alt="Deskripsi Gambar" // Deskripsi gambar (opsional)
              width={500} // Lebar gambar
              height={300} // Tinggi gambar
            />
            <h2 className="text-3xl font-bold my-2">Hello, Ananda Fauziah!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-6 md:mb-10">Your bio here</p>
            {/* <a href="Register" className="border-2 border-white rounded-full px-12 py-1 inline-block font-semibold hover:bg-white hover:text-slate-700 w-full text-center mt-4">Sign Up</a> */}
          </div>
          {/* End of Hello Side */}
        </div>
      </main>
    </div>
  );
}
 