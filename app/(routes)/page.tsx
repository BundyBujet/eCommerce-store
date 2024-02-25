import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/Billboard";
import ProductsList from "@/components/ProductsList";
import Container from "@/components/ui/Container";

const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboards("d7d921f5-0d26-455e-913a-b27840475b17");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductsList items={products} title="feature products" />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
