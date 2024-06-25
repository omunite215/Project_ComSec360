import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { WelcomeDialog } from "../_components/Popups/WelcomeDialog"
import CompanyInfo from "../_components/forms/CompanyInfo"

const ProjectRegistrationPage = () => {
  return (
    <section className="py-4 container">
        <WelcomeDialog/>
        <Tabs defaultValue="Company Info">
            <TabsList className="grid w-full md:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:mb-0 mb-40">
                <TabsTrigger value="Company Info">Company Info</TabsTrigger>
                <TabsTrigger value="Shares Info">Shares Info</TabsTrigger>
                <TabsTrigger value="Directors">Directors</TabsTrigger>
                <TabsTrigger value="Company Secretary">Company Secretary</TabsTrigger>
            </TabsList>
            <TabsContent value="Company Info"><CompanyInfo/></TabsContent>
            <TabsContent value="Shares Info">Shares Info</TabsContent>
            <TabsContent value="Directors">Directors</TabsContent>
            <TabsContent value="Company Secreatary">Company Secretary</TabsContent>
        </Tabs>

    </section>
  )
}

export default ProjectRegistrationPage