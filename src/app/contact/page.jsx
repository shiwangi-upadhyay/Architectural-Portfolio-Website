import ComingSoonPage from "../../components/ComingSoonPage";

const ContactPage = () => {
  return (
    <ComingSoonPage
      title={
          <>
            Our <span className="text-orange-400">Contact</span>
          </>
        }
      currentPage="Contact"
    />
  );
};

export default ContactPage;
