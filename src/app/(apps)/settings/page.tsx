import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { EmptyState } from '@/components/settings/empty-state';
import { ContactInfo } from '@/components/settings/contact-info';
import { AboutFilled } from '@/components/settings/about-filled';

function ConfigPage() {
  return (
    <div className="flex w-full h-full items-start">
      <div className="flex flex-col  w-full h-full  overflow-auto ">
        <Tabs
          defaultValue="about"
          className="w-full  gap-6 flex flex-col h-full "
        >
          <TabsList className="w-full text-sm gap-2 flex justify-start rounded-[10px] h-fit border border-[#F2F4F7] bg-[#F9FAFB] ">
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
            className="w-full border border-[#E5E6E8] rounded-[10px]   h-full overflow-auto "
          >
            {/* <EmptyState
              title="About Duduzili"
              paragraph=" Write a descriptive content about the platform for users
                      to learn"
              btnText="About Duduzili"
            /> */}
            <AboutFilled />
          </TabsContent>
          <TabsContent
            value="contact"
            className="w-full border border-[#E5E6E8] rounded-[10px]   h-full overflow-auto "
          >
            <ContactInfo />
          </TabsContent>
          <TabsContent
            value="privacy"
            className="w-full border border-[#E5E6E8] rounded-[10px]   h-full overflow-auto "
          >
            <EmptyState
              title="Privacy Policy"
              paragraph=" Write a descriptive content about the privacy policy of the platform for users to abide with"
              btnText="Privacy Policy"
            />
          </TabsContent>
          <TabsContent
            value="faq"
            className="w-full border border-[#E5E6E8] rounded-[10px]   h-full overflow-auto "
          >
            <EmptyState
              title="FAQ"
              paragraph=" Write a descriptive content about the platform for users to learn"
              btnText="Add Question"
            />
          </TabsContent>
          {/* </div> */}
        </Tabs>
      </div>
    </div>
  );
}

export default ConfigPage;
