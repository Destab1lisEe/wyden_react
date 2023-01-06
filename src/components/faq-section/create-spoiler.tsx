import axios from "axios";
import React, { useState } from "react";
import { ISpoiler } from "../../models";

const spoilerData: ISpoiler = {
  title: "",
  description: "",
};

interface CreateSpoilerProps {
  onCreate: (spoiler: ISpoiler) => void;
}

export function CreateSpoiler({ onCreate }: CreateSpoilerProps) {
  const [valueTitle, setValueTitle] = useState("");
  const [valueBody, setValueBody] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    spoilerData.title = valueTitle;
    spoilerData.description = valueBody;
    const response = await axios.post<ISpoiler>(
      "https://fakestoreapi.com/products",
      spoilerData
    );
    setError("");

    onCreate(response.data);

    if (valueTitle.trim().length === 0) {
      setError("Хуйни написал клоун");
    }
  };

  const changeHandlerTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueTitle(event.target.value);
  };

  const changeHandlerBody = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueBody(event.target.value)
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={valueTitle}
        onChange={changeHandlerTitle}
        className="mt-5 px-4 py-3 rounded-[10px] border border-[#A1A1A1] text-[14px] w-full"
        placeholder="Enter spoiler title"
      />

      <input
        type="text"
        value={valueBody}
        onChange={changeHandlerBody}
        className="mt-5 px-4 py-3 rounded-[10px] border border-[#A1A1A1] text-[14px] w-full"
        placeholder="Enter spoiler text"
      />

      {error && (
        <p className="text-center font-bold mt-4">Хуйню написал еблан</p>
      )}
      <button className="button">Submit</button>
    </form>
  );
}
