import Link from "next/link";


export default function Footer() {

    return (
        <div className="bg-zinc-100">
            <div className="container lg:grid lg:grid-cols-2 py-14">
                <div className="grid gap-4 pb-4 text-left lg:pb-0 lg:grid-cols-3">
                    <div>
                        <h2 className="pb-4 text-xl font-semibold">COMPANY</h2>
                        <div className="flex flex-col ">
                            <Link className="py-1 hover:underline" href="/about">About Us</Link>
                            <Link className="py-1 hover:underline" href="/press">Press</Link>
                            <Link className="py-1 hover:underline" href="/careers">Careers</Link>
                            <Link className="py-1 hover:underline" href="/contact">Contact</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="pb-4 text-xl font-semibold">DEVELOPMENT</h2>
                        <div className="flex flex-col ">
                            <Link className="py-1 hover:underline" href="/about">Documentation</Link>
                            <Link className="py-1 hover:underline" href="/press">API Reference</Link>
                            <Link className="py-1 hover:underline" href="/careers">Changelog</Link>
                            <Link className="py-1 hover:underline" href="/contact">Status</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="pb-4 text-xl font-semibold">CONNECT</h2>
                        <div className="flex flex-col ">
                            <Link className="py-1 hover:underline" href="/about">Instagram</Link>
                            <Link className="py-1 hover:underline" href="/press">Linkedin</Link>
                            <Link className="py-1 hover:underline" href="/careers">Twitter</Link>
                            <Link className="py-1 hover:underline" href="/press">Facebook</Link>
                            <Link className="py-1 hover:underline" href="/careers">Tiktok</Link>
                        </div>
