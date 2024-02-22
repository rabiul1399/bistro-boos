import Cover from "../../Shared/Cover/Cover";
import contactImg from "../../../assets/contact/banner.jpg";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import OurLocation from "../OurLocation/OurLocation";
import ContactForm from "../ContactForm/ContactForm";

const Contacts = () => {
  return (
    <div className="">
      <Helmet>
        <title>Bistro vibes | Contact</title>
      </Helmet>
      <Cover img={contactImg} title={"Contact Us"} />
      <div className="mt-8">
        <SectionTitle subHeading="---Visit Us---" heading="Our Location" />
      </div>
      <OurLocation />
      <div className="mt-8">
        <SectionTitle
          subHeading="---Send Us a Message---"
          heading="Contact Form"
        />
      </div>
      <ContactForm />
    </div>
  );
};

export default Contacts;
