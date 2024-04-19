import dynamic from "next/dynamic";
import Header from "~/components/Header";

const LeftNavAsideWithNoSSR = dynamic(
  () => import("~/components/LeftNavAside"),
  { ssr: false },
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LeftNavAsideWithNoSSR />
      <div className="flex flex-1 flex-col overflow-auto sm:gap-4 md:py-4">
        <Header />
        {children}
      </div>
    </>
  );
}
