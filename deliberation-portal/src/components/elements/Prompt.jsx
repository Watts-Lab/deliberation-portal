import React, { useState } from "react";
export function Prompt({ file, showToPositions }) {

  const promptString = useText({ file });
  const permalink = usePermalink(file);

  const [value, setValue] = useState("");

  if (!promptString) return <p>Loading prompt...</p>;

  const [, metaDataString, prompt, responseString] = promptString.split("---");

  const metaData = loadYaml(metaDataString);
  const promptType = metaData?.type;
  const promptName = metaData?.name || "unnamedPromt";

  const responses = responseString
    .split(/\r?\n|\r|\n/g)
    .filter((i) => i)
    .map((i) => i.substring(2));

  const saveData = (newValue) => {
    const newRecord = {
      ...metaData,
      permalink, // TODO: test permalink in cypress
      step: progressLabel,
      value: newValue,
    };
    player.set(`prompt_${saveKey || file}_${progressLabel}`, newRecord);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    saveData(e.target.value);
  };

  return (
    <div key={saveKey}>
      <Markdown text={prompt} />
      {promptType === "multipleChoice" && (
        <RadioGroup
          options={Object.fromEntries(
            responses.map((choice, i) => [i, choice])
          )}
          selected={value}
          onChange={handleChange}
          testId={promptName}
        />
      )}

      {promptType === "openResponse" && (
        <TextArea
          defaultText={responses.join("\n")}
          onChange={handleChange}
          value={value}
          testId={promptName}
        />
      )}
    </div>
  );
}
