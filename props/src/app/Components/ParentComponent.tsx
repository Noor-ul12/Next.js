import ChildComponet from "./ChildComponent"
import FeaturedCar from "./FeaturedCar"


const ParentComponet = () => {

    let fullname =" Noor ul huda"
    let classDay ="tuesday"
    let rollNumber = 91978
    let address = "karachi"

    
    let fullname2 ="Hussain"
    let classDay2 ="Wednesday"
    let rollNumber2 = 91678
    let address2 = "Multan"

    return(
        <div >
            <ChildComponet 
            name =  {fullname}
            classDay ={classDay}
            roll ={rollNumber}
            add ={address}
            />

              <ChildComponet 
            name =  {fullname2}
            classDay ={classDay2}
            roll ={rollNumber2}
            add ={address2}
            />

            <FeaturedCar />

        </div>
    )
}

export default ParentComponet;