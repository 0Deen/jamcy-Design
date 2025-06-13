"use client";
import Image from "next/image";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function CatalogueSection() {
    const items = [
        {
    id: "01",
    catagory: "BEDROOM SETUP",
    title: "Cozy Bedroom Setup",
    image: "/image/badroom.jpg",
    description: "Family bedroom with a clean and comfortable design for your family.",
},
{
    id: "02",
    catagory: "KITCHEN SETUP",
    title: "Neat & Clean Kitchen",
    image: "/image/kitchen1.jpg",
    description: "Family kitchen with a clean and comfortable design for your family.",
},
{
    id: "03",
    catagory: "DRAWING SETUP",
    title: "Family Drawing Room",
    image: "/image/drowing.jpg",
    description: "Family drawing room with a clean and comfortable design for your family.",
},
{
    id: "04",
    catagory: "LIVING SETUP",
    title: "Clean Family Room",
    image: "/image/living.jpg",
    description: "Family living room with a clean and comfortable design for your family.",
},
{
    id: "05",
    catagory: "STUDY SETUP",
    title: "Quiet Study Corner",
    image: "/image/ae.jpeg",
    description: "Family study room with a clean and comfortable design for your family.",
},
{
    id: "06",
    catagory: "WORKSTATION SETUP",
    title: "Bright Workstation",
    image: "/image/aam.jpeg",
    description: "Family workstation with a clean and comfortable design for your family.",
},
{
    id: "07",
    catagory: "FIREPLACE SETUP",
    title: "Warm Fireplace Room",
    image: "/image/aaiu.jpeg",
    description: "Family fireplace room with a clean and comfortable design for your family.",
},
{
    id: "08",
    catagory: "LAUNDRY SETUP",
    title: "Organized Laundry Area",
    image: "/image/aal.jpeg",
    description: "Family laundry room with a clean and comfortable design for your family.",
},
{
    id: "09",
    catagory: "CHESS ROOM",
    title: "Peaceful Chess Room",
    image: "/image/baa.jpeg",
    description: "Family chess room with a clean and comfortable design for your family.",
},
{
    id: "10",
    catagory: "DINING SETUP",
    title: "Spacious Dining Area",
    image: "/image/baad.jpeg",
    description: "Family dining room with a clean and comfortable design for your family.",
}

    ]

    return (
        <div className="grid gap-8 divide-gray-300 lg:divide-x lg:gap-0 lg:grid-cols-4 md:grid-cols-2">
            {items.map((item) => (
                <div key={item.id} className="relative overflow-hidden group">
                    <div>
                        <Image src={item.image} width={380} height={100} alt="" className="w-full " />
                    </div>
                    <div className="absolute top-0 p-8 m-12 bg-white bg-opacity-60 backdrop-blur">
                        <div className="flex justify-between pb-4 ">
                            <p className="text-sm">{item.catagory}</p>
                            <span className="text-sm ">{item.id}</span>
                        </div>
                        <a className="block text-xl font-semibold" href="">{item.title}</a>
                        <p className="py-4 text-gray-500">{item.description}</p>
                        <a className="inline-flex items-center font-medium" href="">See Details <TbArrowNarrowRight className="ml-2 text-xl " /></a>
                    </div>

                    <div className="inset-0 flex-col items-center justify-end hidden gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 md:flex md:absolute group-hover:translate-y-full md:border-b-0 bg-zinc-100">
                        <p className="tracking-wider -rotate-90 ">{item.catagory} </p>
                        <span className="">
                            {item.id}
                        </span>

                    </div>
                </div>
            ))}
        </div>
    )
}