
import { Link } from "react-router-dom";
import BackToggle from "../../components/BackToggle";
import ThemeToggle from "../../components/ThemeToggle";


export default function PaslonHeader() {
  return (
   
        <div className="flex justify-center">
          <div className="grid flex-initial h-16 w-16 card place-items-center">
            <Link to="/">
              <BackToggle />
            </Link>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="grid flex-initial h-16 w-72  card bg-base-300 rounded-box place-items-center">
            <h1 className="text-2xl text-center font-bold">PEMILU PRESIDEN</h1>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="grid flex-initial h-16 w-16 card place-items-center">
            <ThemeToggle />
          </div>
        </div>
     
  )
}
