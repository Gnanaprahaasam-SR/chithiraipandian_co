import EmergencyCase from "../images/emergency.jpg";
import LegalHelp from "../images/legalcomplain.png";
import Clock from "../images/workingHour.png";
import slide1 from "../images/auditing.png";
import slide2 from "../images/slide2.webp";
import slide3 from "../images/advisor.png";



const Content = {
    Home:{
        Carousel:{
            title1:"WE SEE OUR GROWTH AS A REFLECTION OF THE SUCCESS OF OUR CLIENTS",
            title2:"WE BELIEVE IN GROWING TOGETHER",
            title3:"OUR NAME IS EASY TO REMEMBER AND OUR WORK IS HARD TO FORGET",
            slide1:slide1,
            slide2:slide2,
            slide3:slide3
        },
        emergencyCase:{
            title:"Emergency Cases ?",
            description:"Contact for Quick Legal Assistance :",
            contanct:"+91 8898 050 051",
            image: EmergencyCase
        },
        legalHelp:{
            title:"Need Legal Help ?",
            description:"Fix an Appointment for Advice / Guidance / Assistance on any Legal Matter :",
            button:"FIX AN APPOINTMENT",
            image: LegalHelp
        },
        workingHour:{
            title:"Working Hours",
            weekdays: "Monday – Friday",
            weekdayTiming:"10.00 am - 09.00 pm",
            weekend:"Saturday",
            weekendTiming:"11.00 am - 06.00 pm",
            weekoff:"Sunday",
            weekoffTiming:"Closed",
            image: Clock
        }
    }
}

export default Content;