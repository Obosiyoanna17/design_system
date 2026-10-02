import {Navbar} from "./components/Navbar"
import {Footer} from "./components/Footer"

export default function DemoPage() {
    
    return (
     <div>
        <Navbar />
            <main className="flex flex-col items-center justify-center p-6 min-h-[90vh] mt-2">
                <h1 className="text-2xl lg:text-3xl font-bold text-center mb-3">NAVBAR & FOOTER DESIGN SYSTEM</h1> 
                <p className="max-w-xl text-center mb-6">This page demonstrates the reusable UI components created for the FinanceFlow application. </p>
                <div className="p-6 max-w-md border-2 rounded-lg mb-5">
                   <h3 className="text-lg text-center font-bold mb-3">Components Demonstrated</h3>
                   <ul className="space-y-2">
                     <li>✓ Navbar</li>
                     <li>✓ Footer</li>
                     <li>✓ Responsive Navigation</li>
                     <li>✓ shadcn/ui</li>
                  </ul>
                </div>
        </main>
        <Footer />
        </div>
    )
}