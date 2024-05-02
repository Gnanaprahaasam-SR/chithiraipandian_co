import AboutusImage from '../../images/AboutUs.png'
import { Accessibility, VerifiedUser, TrendingUp, Stars, HowToReg, AccountBalance, Transform, WorkOutline, PeopleAlt } from '@mui/icons-material';
import CA_T_CHITHIRAI_PANDIAN from '../../images/TeamImage/CA_T_CHITHIRAI_PANDIAN.jpeg'
import CA_V_MITHRA from '../../images/TeamImage/CA_V_MITHRA.jpeg'
import CA_SUBA_SHREE_SV from '../../images/TeamImage/CA_SUBA_SHREE_SV.jpeg';
import nithya from "../../images/nithya.png";



const AboutUsData = {
    firm: {
        title: "The Firm",
        categories: [
            {
                title: "Experience",
                description: "With over two decades of extensive experience in Accountancy, Auditing, and both Domestic and International Taxation, he boasts a commendable track record as an advisor in these fields, including matters concerning international taxation.",
                icon: <AccountBalance />
              },
              {
                title: "Transformation",
                description: "Acting as a catalyst for change, he has successfully transformed the firm from a traditional approach to one driven by technology, expanding its services into areas such as Knowledge Process Outsourcing, serving clients not only in India but also abroad.",
                icon: <Transform />
              },
              {
                title: "Service Portfolio",
                description: "Moreover, he has played a pivotal role in broadening the firm's service portfolio from traditional Auditing and Taxation to encompass multifaceted consultancy. His expertise extends to the realm of Indirect Taxes, encompassing VAT, Excise, Service Tax, with ongoing exploration into GST.",
                icon: <WorkOutline />
              },
              {
                title: "Community Contribution",
                description: "Furthermore, he has cultivated a practice in Company Law matters and Limited Liability Partnership. Additionally, he has actively contributed to the community through various positions held at the Lions Club, Sulur, Coimbatore, and has delivered numerous lectures on professional subjects at different forums.",
                icon: <PeopleAlt />
              }
            ],
        image: AboutusImage
    },
    values: {
        title: "Our Value",
        image: AboutusImage,
        categories:[ {
            title:"Respect",
            icon: <Accessibility />,
            content: "Respect forms the cornerstone of our interactions, both internally and externally. We believe in treating every individual with dignity, empathy, and understanding. Whether you're a client, a team member, or a member of our community, your perspective and needs are valued and respected at Chithirai Pandian & Co",
        },
         {
            title:"Integrity",
            icon: <VerifiedUser />,
            content: "Commitment to honesty, transparency, and ethical practices in all aspects of our work.",
        },
        {
            title:"Innovation",
            icon: <TrendingUp />,
            content: "Innovation is at the heart of what we do. We continually seek out new ways to streamline processes, improve efficiency, and enhance the client experience. By embracing cutting-edge technologies and creative solutions, we stay ahead of the curve, providing our clients with innovative financial strategies tailored to their unique goals and circumstances.",
        },
         {
            title:"Excellence",
            icon: <Stars />,
            content: "Excellence is not just a goal; it's our standard. Our team of Chartered Accountants is dedicated to delivering the highest caliber of service, expertise, and professionalism. We uphold rigorous standards of quality and accuracy in everything we do, ensuring that our clients receive nothing short of excellence in their financial management and advisory services.",
        },
        {
            title:"Leadership",
            icon: <HowToReg />,
            content: "Leadership is about more than just guiding others; it's about inspiring positive change and driving meaningful progress. As leaders in the financial industry, we take pride in setting the benchmark for excellence and integrity. Through our proactive guidance, strategic insights, and unwavering commitment to our clients' success, we lead by example, empowering individuals and businesses to thrive in today's dynamic financial landscape.",
        }
    ]
        
    },
    team: {
        title: "Our Team",
        image: AboutusImage,
        members: [
            {
                name: "CA T.CHITHIRAI PANDIAN",
                designation: "HEAD OF AUDIT AND ASSURANCE PRACTICE, BUSINESS CONSULTANCY, REGULATORY AND ADVISORY PRACTICE.",
                image: CA_T_CHITHIRAI_PANDIAN
            },
            {
                name: "CA V MITHRA",
                designation: "HEAD OF DIRECT AND INTERNATIONAL TAX, REGULATORY AND ADVISORY PRACTICE.",
                image: CA_V_MITHRA
            },
            {
                name: "CA SUBA SHREE S V",
                designation: "HEAD OF INDIRECT TAX, INTERNAL AUDIT AND RISK ADVISORY PRACTICE",
                image: CA_SUBA_SHREE_SV
            },
            {
                name: "HR  NITHYA S",
                designation: "HUMAN RESOURCE TRAINING & DEVELOPMENT",
                image: nithya
            },
            
        ]
    }
};

export default AboutUsData;
 
