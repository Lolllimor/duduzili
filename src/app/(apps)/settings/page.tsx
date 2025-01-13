import { Faq } from '@/components/settings/faq/faq';
import { About } from '@/components/settings/about/about';
import GeneralLayout from '@/components/layout/generalLayout';
import { Deleted } from '@/components/settings/deleted/deleted';
import { Contact } from '@/components/settings/contact/contact';
import { Privacy } from '@/components/settings/privacy/privacy';
import { Deactivated } from '@/components/settings/deactivated/deactivated';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SocialMediaIntegration } from '@/components/settings/social-integration/social-integeration';

function ConfigPage() {
  return (
    <GeneralLayout pageTitle="Settings">
      <div className=" w-full h-full items-start px-6 pb-5">
        <Tabs
          defaultValue="about"
          className="w-full  gap-6 flex flex-col h-full "
        >
          <TabsList className="w-full text-sm gap-2 flex justify-start rounded-[10px] h-fit border border-[#F2F4F7]  bg-[#F9FAFB] ">
            <TabsTrigger
              value="about"
              className="data-[state=active]:text-[#4534B8] data-[state=active]:shadow-sm font-semibold rounded-[6px] "
            >
              About Duduzili
            </TabsTrigger>
            <TabsTrigger
              value="contact"
              className="data-[state=active]:text-[#4534B8] data-[state=active]:shadow-sm font-semibold rounded-[6px]"
            >
              Contact Info
            </TabsTrigger>
            <TabsTrigger
              value="privacy"
              className="data-[state=active]:text-[#4534B8] data-[state=active]:shadow-sm font-semibold rounded-[6px]"
            >
              Privacy Policy
            </TabsTrigger>
            <TabsTrigger
              value="faq"
              className="data-[state=active]:text-[#4534B8] data-[state=active]:shadow-sm font-semibold rounded-[6px]"
            >
              FAQ
            </TabsTrigger>
            <TabsTrigger
              value="integration"
              className="data-[state=active]:text-[#4534B8] data-[state=active]:shadow-sm font-semibold rounded-[6px]"
            >
              Social Media Integration
            </TabsTrigger>
            <TabsTrigger
              value="deactivated"
              className="data-[state=active]:text-[#4534B8] data-[state=active]:shadow-sm font-semibold rounded-[6px]"
            >
              Deactivated Accounts
            </TabsTrigger>
            <TabsTrigger
              value="deleted"
              className="data-[state=active]:text-[#4534B8] data-[state=active]:shadow-sm font-semibold rounded-[6px]"
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
