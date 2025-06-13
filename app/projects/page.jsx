import Image from "next/image";



export default function Projects() {
    const projects = [
        {
    id: 1,
    name: 'Drawing room for family time',
    description: 'Drawing room with a clean and comfortable design for your family. Charming with a modern design.',
    image: '/image/project3.jpg',
    link: '',
},
{
    id: 2,
    name: 'Kitchen look modern and clean',
    description: 'Kitchen with a sleek and clean layout for easy cooking. Charming with a modern design.',
    image: '/image/project2.jpg',
    link: '',
},
{
    id: 3,
    name: 'Perfect living room for family time',
    description: 'Living room with a clean and comfortable design for your family. Charming with a modern design.',
    image: '/image/faa.jpeg',
    link: '',
},
{
    id: 4,
    name: 'Study corner for quiet reading',
    description: 'Study corner with a peaceful and focused layout for reading. Charming with a modern design.',
    image: '/image/ae.jpeg',
    link: '',
},
{
    id: 5,
    name: 'Workstation with natural lighting',
    description: 'Workstation with a simple and productive layout for your tasks. Charming with a modern design.',
    image: '/image/aabv.jpeg',
    link: '',
},
{
    id: 6,
    name: 'Cozy fireplace for warm evenings',
    description: 'Fireplace setup with a cozy and inviting vibe for relaxing. Charming with a modern design.',
    image: '/image/fa.jpeg',
    link: '',
},
{
    id: 7,
    name: 'Laundry room organized and clean',
    description: 'Laundry room with a fresh and tidy layout for easy use. Charming with a modern design.',
    image: '/image/aa.jpeg',
    link: '',
},
{
    id: 8,
    name: 'Chess room for quiet strategy',
    description: 'Chess room with a calm and classic look for concentration. Charming with a modern design.',
    image: '/image/baa.jpeg',
    link: '',
},
{
    id: 9,
    name: 'Bedroom peaceful and relaxing',
    description: 'Bedroom with a clean and comfortable layout for sleeping. Charming with a modern design.',
    image: '/image/bee.jpeg',
    link: '',
},
{
    id: 10,
    name: 'Dining room stylish and spacious',
    description: 'Dining room with an open and elegant layout for meals. Charming with a modern design.',
    image: '/image/baaf.jpeg',
    link: '',
}

    ];
    return (
        <div className="">
            <div className="bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover ">
                <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white ">OUR PROJECTS</h1>
            </div>
            <div className="container grid grid-cols-2 gap-8 py-8">

                {projects.map((project) => (
                    <div key={project.id} className="relative overflow-hidden rounded-xl group">
                        <div>
                            <Image src={project.image} width={480} height={380} alt="" className="w-full" />
                        </div>
                        <div className="absolute bottom-0 flex-col items-center justify-end w-full gap-32 p-12 text-xl text-white transition duration-300 ease-in-out translate-y-full bg-gradient-to-b from-transparent to-black group-hover:translate-y-0">
                            <h1 className="text-2xl font-semibold">{project.name}</h1>
                            <p className="py-4 ">{project.description}</p>
                        </div>
                    </div>


                ))}
            </div>
        </div>
    )
}