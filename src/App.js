import "./style.css";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import {useState} from "react"
import ProductDetail from './ProductDetailPage'
import axios from "axios"
export default function App() {
  
  const [products,setProducts] =useState([]);
  const [loading, setLoading] = useState(false);
  const accessToken=sessionStorage.getItem("accessToken")
  const [ res, setres ]= useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(false);
       var response =await axios.post(
        "http://192.168.1.9:3000/productdetail/app",{id},{headers:{
          authorization: accessToken
        }}
      );
      console.log(response.data)
      setres(response.data)
      setLoading(true);
    };
  return (
    <BrowserRouter>
      <TopNavigattionBar/>
      <Routes>
        <Route path="/" element={<ProductDetail products={products}setProducts={products}/>}/>
        <ProductDetail></ProductDetail>
      </Routes>
    </BrowserRouter>
  );
}