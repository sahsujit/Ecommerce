import CommonDetails from "@/components/CommonDetails";
import { productById } from "@/services/product";

  


export default async function productDetails({params}){
    const productDetailsData = await productById(params.details)
    console.log(productDetailsData,"sujit")

    return <CommonDetails item={productDetailsData && productDetailsData.data} />
}