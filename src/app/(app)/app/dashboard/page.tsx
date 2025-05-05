import Branding from "@/components/branding";
import Stats from "@/components/stats";
import SearchForm from "@/components/search-form";
import PetList from "@/components/pet-list";
import PetDetails from "@/components/pet-details";

export default function Page() {
  return (
    <main>
      <div className="flex items-center justify-between text-white py-8">
        <Branding />
        <Stats />
      </div>
      <div>
        <SearchForm />
        <ContentBlock>
          <PetList />
        </ContentBlock>
        <ContentBlock>
          <PetDetails />
        </ContentBlock>
      </div>
    </main>
  );
}
