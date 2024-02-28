"use client";

import { mc } from "merge-class";
import { ToastBar, Toaster } from "react-hot-toast";

function Toast() {
  return (
    <div
      className={mc(
        "pointer-events-none fixed inset-8 z-[9999] overflow-hidden",
      )}
    >
      <Toaster
        containerStyle={{
          inset: 0,
          position: "absolute",
        }}
        toastOptions={{
          duration: 3000,
        }}
        position="bottom-right"
      >
        {(t) => <ToastBar toast={t} />}
      </Toaster>
    </div>
  );
}

export default Toast;
