import React, { Suspense } from "react";
import CustomButton from "../components/customButton";

const Settings = () => {
  return (
    <div>
      <h2>Settings</h2>
      <Suspense fallback={<h2>Loading texts...</h2>}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi nihil
          blanditiis quae, eos libero aliquid id eligendi eius molestiae
          deleniti perferendis! Consequatur adipisci autem similique eum,
          dignissimos consectetur repellat repudiandae!
        </p>
      </Suspense>
      <CustomButton>Go Home</CustomButton>
    </div>
  );
};

export default Settings;
