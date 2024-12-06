import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from 'next/link';
import { booksData } from './books-data'; // Stelle sicher, dass der Pfad zu deiner data.js Datei korrekt ist
import Image from 'next/image';

export default function Buecher() {
  return (
    <div data-aos="fade-left">
      <h1 className="md:text-[2rem] text-2xl font-bold text-center text-white mt-12 mb-2">Faktische Bücher:</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="md:w-full w-3/4 max-w-sm mb-[50px] md:max-w-2xl lg:max-w-4xl"
      >
        <CarouselContent>
          {booksData.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Link href={item.link} passHref target="_blank">
                    <Card className="bg-zinc-900 text-white m-auto transition-transform transform ease-in-out hover:-translate-y-1 hover:bg-zinc-800">
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        {item.logo && (
                          <Image src={item.logo} width={80} height={80} alt={item.title} className="w-16 h-16 mb-4 rounded-lg" />
                          )}
                        <span className="text-2xl font-semibold">{item.title}</span>
                      </CardContent>
                    </Card>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-white bg-zinc-900"/>
        <CarouselNext className="text-white bg-zinc-900"/>
      </Carousel>
    </div>
  );
}
