import { Faq } from '@/components/settings/faq/faq';
import { About } from '@/components/settings/about/about';
import GeneralLayout from '@/components/layout/generalLayout';
import { Deleted } from '@/components/settings/deleted/deleted';
import { Contact } from '@/components/settings/contact/contact';
import { Privacy } from '@/components/settings/privacy/privacy';
import { Deactivated } from '@/components/settings/deactivated/deactivated';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SocialMediaIntegration } from '@/components/settings/social-integration/social-integeration';
import { Terms } from '@/components/settings/terms/terms';

function ConfigPage() {
  return (
    <GeneralLayout pageTitle="Settings" className="h-[calc(100vh-120px)]">
      <div className=" w-full h-full items-start px-6">
        <Tabs
          defaultValue="about"
          className="w-full  gap-6 flex flex-col h-full "
        >
          <TabsList className="w-full text-xl gap-2 flex justify-start rounded-[10px] h-fit border border-[#F2F4F7]  bg-[#F9FAFB] overflow-x-auto overflow-y-hidden hide-scroll py-2">
            <TabsTrigger
              value="about"
              className="data-[state=active]:text-[#4534B8] data-[state=active]:shadow-xl font-semibold rounded-[6px] font-inter "
            >
              About Duduzili
            </TabsTrigger>
            <TabsTrigger
              value="contact"
              className="data-[state=active]:text-[#4534B8] data-[state=active]:shadow-xl font-semibold rounded-[6px] font-inter"
            >
              Contact Info
            </TabsTrigger>
            <TabsTrigger
              value="privacy"
              className="data-[state=active]:text-[#4534B8] data-[state=active]:shadow-xl font-semibold rounded-[6px] font-inter"
            >
              Privacy Policy
            </TabsTrigger>
            <TabsTrigger
              value="terms"
              className="data-[state=active]:text-[#4534B8] data-[state=active]:shadow-xl font-semibold rounded-[6px] font-inter"
            >
              Terms and Conditions
            </TabsTrigger>
            <TabsTrigger
              value="faq"
              className="data-[state=active]:text-[#4534B8] data-[state=active]:shadow-xl font-semibold rounded-[6px] font-inter"
            >
              FAQ
            </TabsTrigger>
            <TabsTrigger
              value="integration"
              className="data-[state=active]:text-[#4534B8] data-[state=active]:shadow-xl font-semibold rounded-[6px] font-inter"
            >
              Social Media Integration
            </TabsTrigger>
            <TabsTrigger
              value="deactivated"
              className="data-[state=active]:text-[#4534B8] data-[state=active]:shadow-xl font-semibold rounded-[6px] font-inter tracking-wide"
            >
              Deactivated Accounts
            </TabsTrigger>
            <TabsTrigger
              value="deleted"
              className="data-[state=active]:text-[#4534B8] data-[state=active]:shadow-xl font-semibold rounded-[6px] font-inter tracking-wide"
            >
              Deleted Accounts
            </TabsTrigger>
          </TabsList>
          {/* <div className="border border-[#E5E6E8] rounded-[10px] flex h-full  overflow-auto"> */}
          <TabsContent
            value="about"
            className="w-full border border-[#E5E6E8] rounded-[10px] bg-white h-full overflow-auto "
          >
            <About />
          </TabsContent>
          <TabsContent
            value="contact"
            className="w-full border border-[#E5E6E8] rounded-[10px] bg-white  h-full overflow-auto "
          >
            <Contact />
          </TabsContent>
          <TabsContent
            value="privacy"
            className="w-full border border-[#E5E6E8] rounded-[10px] bg-white  h-full overflow-auto "
          >
            <Privacy />
          </TabsContent>
          <TabsContent
            value="terms"
            className="w-full border border-[#E5E6E8] rounded-[10px] bg-white  h-full overflow-auto "
          >
            <Terms />
          </TabsContent>
          <TabsContent
            value="faq"
            className="w-full border border-[#E5E6E8] rounded-[10px] flex bg-white  h-full overflow-auto "
          >
            <Faq />
          </TabsContent>
          <TabsContent
            value="integration"
            className="w-full border border-[#E5E6E8] rounded-[10px] bg-white  h-full overflow-auto "
          >
            <SocialMediaIntegration />
          </TabsContent>
          <TabsContent
            value="deactivated"
            className="w-full border border-[#E5E6E8] rounded-[10px] bg-white  h-full overflow-auto "
          >
            <Deactivated />
          </TabsContent>
          <TabsContent
            value="deleted"
            className="w-full border border-[#E5E6E8] rounded-[10px] bg-white   h-full overflow-auto "
          >
            <Deleted />
          </TabsContent>
          {/* </div> */}
        </Tabs>
      </div>
    </GeneralLayout>
  );
}

export default ConfigPage;
