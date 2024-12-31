import GenaralLayout from '@/components/layout/generalLayout';
import { Sidebar } from '@/components/layout/sidebar';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex items-start w-full h-screen">
      <Sidebar />
      {children}
    </section>
  );
};

export default layout;
