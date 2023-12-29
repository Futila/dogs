import useForm from "../../../hooks/useForm";
import useFetch from "../../../hooks/useFetch";
import { PASSWORD_LOST } from "../../../services/api";

import Input from "../../Forms/Input";
import Button from "../../Forms/Button";
import Error from "../../../helpers/Error";

function LogiPasswordLost() {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("lost", "reset"),
      });
      const { json } = await request(url, options);
      console.log(json);
    }
  }
  return (
    <section>
      <h1 className="title">Lost your password?</h1>

      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / User" type="text" name="email" {...login} />

          {loading ? (
            <Button disabled>Sending</Button>
          ) : (
            <Button>Send email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
}

export default LogiPasswordLost;
