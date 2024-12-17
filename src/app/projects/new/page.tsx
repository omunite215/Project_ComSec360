import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WelcomeDialog } from "../_components/Popups/WelcomeDialog";
import CompanyInfoForm from "../_components/forms/CompanyInfoForm";
import FormWrapper from "@/components/FormWrapper";
import ShareCapitalForm from "../_components/forms/ShareCapitalForm";
import ShareCapitalInfo from "@/components/datatables/ShareCapitalInfo";
import ShareholderForm from "../_components/forms/ShareholderForm";
import DirectorForm from "../_components/forms/DirectorForm";
import CompanySecretaryForm from "../_components/forms/CompanySecretaryForm";
import InviteGuestUsers from "../_components/forms/InviteGuestUser";

const ProjectRegistrationPage = () => {
  return (
    <section className="py-4 container">
      <WelcomeDialog />
      <Tabs defaultValue="Company Info">
        <TabsList className="grid w-full md:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:mb-0 mb-40">
          <TabsTrigger value="Company Info">Company Info</TabsTrigger>
          <TabsTrigger value="Shares Info">Shares Info</TabsTrigger>
          <TabsTrigger value="Directors">Directors</TabsTrigger>
          <TabsTrigger value="Company Secretary">Company Secretary</TabsTrigger>
        </TabsList>
        <TabsContent value="Company Info">
          <CompanyInfoForm />
        </TabsContent>
        <TabsContent value="Shares Info" className="space-y-4">
          <FormWrapper
            name="Share Capital"
            shareCapitalForm={<ShareCapitalForm />}
            dataTable={<ShareCapitalInfo />}
          />
          <FormWrapper
            name="Shareholder"
            dataTable={<ShareCapitalInfo />}
            form={<ShareholderForm />}
            inviteForm={<InviteGuestUsers text="Shareholder" />}
          />
        </TabsContent>
        <TabsContent value="Directors">
          <FormWrapper
            name="Director"
            dataTable={<ShareCapitalInfo />}
            form={<DirectorForm />}
            inviteForm={<InviteGuestUsers text="Shareholder" />}
          />
        </TabsContent>
        <TabsContent value="Company Secretary">
          <CompanySecretaryForm />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default ProjectRegistrationPage;
