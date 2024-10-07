"use client"

import { Button } from "@/components/ui/button";
import Navbar from "./navbar";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import Image1 from "@/pages/Image6.jpg"
import Image2 from "@/pages/Image4.jpg"
import Image3 from "@/pages/Image3.jpg"
import Image4 from "@/pages/Image2.jpg"
import Image5 from "@/pages/Image1.jpg"
import Image6 from "@/pages/Image9.jpg"
import Image7 from "@/pages/Image10.jpg"
import Image8 from "@/pages/Images11.jpeg"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import Footer from "./footer";
import Image10 from "@/pages/imagecopy.png"


export default function Home() {
  const foodCategories =  [
    { src: Image2, alt: 'Starters', name: "Starters" },
    { src: Image5, alt: 'Chicken' ,name:'Chicken' },
    { src: Image3, alt: 'Main Course',name:"Main Course"  },
    { src: Image8, alt: 'Cakes',name:'Cakes'  },
    { src: Image6, alt: 'soup',name:'soup'  },
    { src: Image7, alt: 'Naan',name:'Naan'  },
    { src: Image4, alt: 'Desserts',name:'Desserts'},
  ]
  const router = useRouter();
  const backgroundImageUrl = " Hero Section Background Imgae src";

  return (
    <div className="flex flex-col min-h-screen " 
  
    >
      <Navbar/>
      {/* Hero Section with Background Image */}
      <section
        className="w-full h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }} // Background Image
      >
        
        <div className="container  w-full h-[100vh] z-10 flex items-center justify-center">
          <div className="flex flex-col bg-primary/30 items-center justify-center text-center p-5 rounded-lg">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-6xl md:text-5xl lg:text-6xl text-gray-100  dark:text-gray-900">
                Welcome to Dubai Darbar
              </h1>
              <p className="mx-auto max-w-[700px] text-slate-100 dark:text-gray-900 md:text-xl">
                Experience culinary excellence in the heart of the city.
              </p>
            </div>
            <div className="space-x-8 space-y-4">
              <Button onClick={()=> router.push("/reservations")} >Book a Table</Button>
              <Button variant="outline"  onClick={() => router.push("/menu")}>View Menu</Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full h-[70vh] max-w-7xl mx-auto flex flex-col justify-center p-6">
        <div className="flex justify-between items-center mt-12">
          <h2 className="text-3xl font-bold">Our Menu Categories</h2>
          <Button variant="outline" onClick={() => router.push("/menu")}>
            View all
          </Button>
        </div>

        <Carousel
          className="w-full flex mt-6 sm:flex-col "
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="">
            {foodCategories.map((category, index) => (
              <CarouselItem
                key={index}
                className="w-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2 "
              >
                <div className="p-1">
                  <Card className="border-slate-700">
                    <CardHeader>
                      <h3 className="font-semibold text-xl text-start">
                        {category.name}
                      </h3>
                    </CardHeader>
                    <CardContent className=" p-4">
                      <Image
                        src={category.src}
                        alt={category.alt}
                        width={300}
                        height={300}
                        className="rounded-md object-cover w-full h-[200px] md:h-[200px] lg:h-[200px]"
                      />
                    </CardContent>
                    <CardFooter>
                      <a href="/menu" className=" p-1 hover:rounded-sm hover:bg-slate-400 dark:hover:bg-slate-800  text-sm">View all</a>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
            <CarouselPrevious className="bg-slate-300 dark:bg-slate-700 hidden md:flex " />
            <CarouselNext className="bg-slate-300 dark:bg-slate-700 hidden md:flex" />
        </Carousel>
      </section>

      {/* Images Section */}
      <section className=" w-full h-[100vh] flex flex-col mb-6 lg:flex-row items-center md:mb-6 justify-evenly p-12 space-y-3 lg:space-y-0 lg:space-x-8">
        {/* Images Section */}
        <div className="flex items-center  
        justify-center lg:space-y-4 w-full lg:w-1/2">

          {/* Image 1 */}
          <div className="rounded-xl w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] overflow-hidden shadow ">
            <Image
              src= {Image1}// Replace with actual image path
              alt="Momo"
            width={500}
            height={300}
            className="object-cover w-full h-full"
          />
          </div>
        </div>
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-slate-100 mb-4">
            Great Food, Great Life
          </h2>
          <p className="text-slate-900 mb-6 dark:text-slate-100">
          Indulge in our exquisite dishes, crafted with the finest ingredients and a passion for culinary excellence. Each meal is a celebration of global flavors, designed to offer you a dining experience unlike any other. Join us in savoring the taste of perfection, where every bite brings joy and every meal creates lasting memories.
          </p>
          {/* Call to Action Button */}
          <Button className="mt-3 px-8 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 hover:shadow-lg  focus:ring-4 focus:ring-gray-600 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300 dark:focus:ring-gray-400"
          onClick={()=>{router.push("/reservations") }}
          >
          Book a Table
          </Button>
        </div>
      </section>
      
    <Footer/>

    </div>
  );
}
