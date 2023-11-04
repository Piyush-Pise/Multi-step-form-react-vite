import { useState } from "react";
import Input from "./Input";

function PersonalInfo({name, email, phNo, OnChange}) {
  return (
    <>
      <Input
        label="Name"
        value={name}
        OnChange={OnChange}
        index={1}
        type="text"
        placeholder="e.g. Stephen King"
      />
      <Input
        label="Email Address"
        value={email}
        OnChange={OnChange}
        index={2}
        type="text"
        placeholder="e.g. stephenking@lorem.com"
      />
      <Input
        label="Phone Number"
        value={phNo}
        OnChange={OnChange}
        index={3}
        type="text"
        placeholder="e.g. +91 12345 6789"
      />
    </>
  );
}

export default PersonalInfo;
