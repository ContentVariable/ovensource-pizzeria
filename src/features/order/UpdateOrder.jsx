import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";

function UpdateOrder() {
  // eslint-disable-next-line no-unused-vars
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make it a Priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;
