import { Button } from "@/components/ui/button";
// every main component in page.tsx 
export default function ButtonDemoPage() {
    return (
        <div className="flex flex-row min-h-screen items-center justify-center">
            <Button>Default2</Button>
            <Button variant = {'secondary'}>Secondary</Button>
            <Button variant = {'outline'}>Outline</Button>
            <Button variant = {'ghost'}>Ghost</Button>
            <Button variant = {'link'}>Link</Button>            
            <Button variant = {'destructive'}>Destructive</Button>            
        </div>
    )
}