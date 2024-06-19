import GridOption from "@/components/GridOption";


function Home() {
  return (
    <main className="flex-1">
      <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4">
        <GridOption
            title="Shop Electronics"
            image="https://links.papareact.com/pj2"
            className="bg-pink-100 h-full md:h-32"
          >

        </GridOption>
        <GridOption
            title="Shop Electronics"
            image="https://links.papareact.com/pj2"
            className="bg-red-100 col-span-2 row-span-2"
          >

        </GridOption>
        <GridOption
            title="Shop Electronics"
            image="https://links.papareact.com/pj2"
            className="bg-red-100 row-span-3"
          >

        </GridOption>
        <GridOption
            title="Shop Electronics"
            image="https://links.papareact.com/pj2"
            className="bg-red-100 h-64 "
          >

        </GridOption>
      </div>
       
    </main>
  );
}

export default Home;