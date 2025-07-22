import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../../ui/Button";
import Input from "../../ui/Input";

import { updateName } from "./userSlice";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username || username.length > 40) return;

    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <p className="text-base font-semibold text-[#2F3234] md:text-2xl">
          Benvenuto!
        </p>
        <span>Let's start your order right by getting your name:</span>
      </div>

      <Input
        styling="medium"
        type="text"
        placeholder="Your Full Name"
        id="full-name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <Button>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
