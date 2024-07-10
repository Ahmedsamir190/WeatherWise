import { Errorstructure } from "@/assets/Error";
import LayoutComponent from "@/components/Layout";

function Error() {
  return (
    <Errorstructure
      title={
        " Sorry for the bad news but we have some technical issues we will come back soon"
      }
      image={"/error.gif"}
    />
  );
}

export default Error;
