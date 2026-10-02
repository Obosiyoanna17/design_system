import Link from "next/link";
import { Separator } from "@/components/ui/separator";
export function Footer() {
    return (
        <footer className="flex flex-col bg-black text-gray-300 p-6">
            <h3 className="text-xl text-green-500 font-bold mb-2">FinanceFlow</h3>
            <p className="text-sm mb-6">Personal financial visibility made simple.</p>
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <Link href="/" className="hover:text-green-500 transition-colors">Dashboard</Link>
            <Link href="/transactions" className="hover:text-green-500 transition-colors">Transactions</Link>
            <Link href="/reports" className="hover:text-green-500 transition-colors">Reports</Link>
            </div>
            <Separator />
            <p className="text-sm text-gray-400 pt-6">© 2026 FinanceFlow. All rights reserved.</p>

        </footer>
    )
}


