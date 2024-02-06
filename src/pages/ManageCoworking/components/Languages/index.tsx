import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useManageContext } from "../../context";
import { Steps } from "types";

function LanguageSelect() {
  const { control, handleSubmit } = useForm();
  const { setData, setCurrentStep } = useManageContext();
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const onSubmit = (data: any) => {
    setData((prevState) => ({ ...prevState, language: data }));
    setCurrentStep(Steps.FEATURES);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: 500, padding: 40 }}
    >
      <h1>Language</h1>
      <Controller
        name="language"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <select
            {...field}
            style={{
              padding: 10,
              height: 42,
              marginTop: 10,
              width: 200,
              borderRadius: 8,
            }}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            <option value="">Choose language</option>
            <option value="украинский">Українська</option>
            <option value="английский">English</option>
            <option value="иврит">עִבְרִית</option>
          </select>
        )}
      />
      <br />
      <button
        disabled={!selectedLanguage}
        style={{
          padding: 20,
          marginTop: 10,
          width: 200,
          borderRadius: 8,
          color: "white",
          backgroundColor: selectedLanguage
            ? `var(--color-primary)`
            : "rgba(66, 66, 255, 0.334)",
          marginBottom: 10,
        }}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default LanguageSelect;
