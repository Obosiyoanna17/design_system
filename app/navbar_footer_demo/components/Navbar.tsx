import Link from "next/link";
import {Menu} from "lucide-react"
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,

} from "@/components/ui/sheet";


export function Navbar() {
    return (
        <nav className="flex items-center justify-between bg-gray-50 border-b p-6 w-full">
            <h1 className="text-2xl font-bold text-green-600">FinanceFlow</h1>
            <div className="items-center font-semibold hidden lg:flex gap-10">
                <div className="flex gap-10">
                    <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">Dashboard</Link>
                    <Link href="/transactions" className="text-gray-700 hover:text-green-600 transition-colors">Transactions</Link>
                    <Link href="/reports" className="text-gray-700 hover:text-green-600 transition-colors">Reports</Link>
                </div>
              <Button variant="default" className="font-semibold p-5 bg-green-600 hover:bg-green-700">
                Get Started
              </Button>
            </div>
            <Sheet>
                <SheetTrigger>
                    <Button variant="ghost" className="h-8 w-8 p-0 lg:hidden">
                        <Menu />
                    </Button>
                </SheetTrigger>
                    <SheetContent>
                        <div className="flex flex-col gap-6 p-6 text-lg font-semibold">
                        <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">Dashboard</Link>
                        <Link href="/transactions" className="text-gray-700 hover:text-green-600 transition-colors">Transactions</Link>
                        <Link href="/reports" className="text-gray-700 hover:text-green-600 transition-colors">Reports</Link>
                        <Button variant="default" className="p-5 bg-green-600 hover:bg-green-700 mt-5">
                            Get Started
                        </Button>
                        </div>
                    </SheetContent>
               
                  
            </Sheet>
        </nav>
    )
}