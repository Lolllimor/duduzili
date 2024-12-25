"use client";
import { toast } from "react-hot-toast";

export const handleError = (error: any) => {
  const errorData = error as any;

  const errorObject = errorData;
  let errorMessage;

  if (typeof errorObject === "object" && errorObject !== null) {
    console.log("error:", errorData);
    return toast.error(
      <span>
        {errorData?.data?.data?.message?.message ||
          errorData?.data?.data?.message?.status}
      </span>,
      {
        style: {
          border: "1px solid #EF4444",
          padding: "16px",
          color: "#0A0A0A",
        },
        iconTheme: {
          primary: "#EF4444",
          secondary: "#FAFAFA",
        },
        duration: 5000,
      }
    );
  } else if (errorObject === null) {
    console.log("other:", errorData);
    return toast.error(<span>{`Network error`}</span>, {
      style: {
        border: "1px solid #EF4444",
        padding: "16px",
        color: "#0A0A0A",
      },
      iconTheme: {
        primary: "#EF4444",
        secondary: "#FAFAFA",
      },
      duration: 5000,
    });
  } else {
    return toast.error(<span>{`An unknown error occurred`}</span>, {
      style: {
        border: "1px solid #EF4444",
        padding: "16px",
        color: "#0A0A0A",
      },
      iconTheme: {
        primary: "#EF4444",
        secondary: "#FAFAFA",
      },
      duration: 5000,
    });
  }
};
