import Navbar from "@/components/navbar";
import SidePanel from "@/components/side-panel";
import Slide from "@/components/slide";

export default function Home() {
  return (
    <>
      <Navbar />
      <SidePanel />
      <div className="p-4 mt-14 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <Slide />
        </div>
      </div>
    </>
  );
}
