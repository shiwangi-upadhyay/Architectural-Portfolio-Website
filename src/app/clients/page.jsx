import ComingSoonPage from "../../components/ComingSoonPage";

const ClientsPage = () => {
  return (
    <ComingSoonPage
      title={
          <>
            Our <span className="text-orange-400">Clients</span>
          </>
        }
      currentPage="Clients"
    />
  );
};

export default ClientsPage;
