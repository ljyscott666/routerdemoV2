import  {  useLocation} from "react-router-dom"

//  console.log(searchParams.get("keyword"));

//useSearchParams

export const ProductList = () => {
   //const [searchParams] =  useSearchParams();
   const location = useLocation();
    
   console.log(location)

  return (
    <main>
    <div className="component">ProductList</div></main>
  )
}
