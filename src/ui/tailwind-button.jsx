"use client";
import React from "react";
import { IconClipboard } from "@tabler/icons-react";
import { cn } from "../util/CnComponent"

const ButtonsCard = ({ children, className, onClick }) => {
  return (
    React.createElement("div", { onClick: onClick, className: cn(
      "h-60 w-full bg-white rounded-xl border border-neutral-100 dark:bg-black dark:border-white/[0.2] hover:border-neutral-200 group/btn overflow-hidden relative flex items-center justify-center",
      className
    )},
      React.createElement("div", { className: "absolute inset-0 dark:bg-dot-white/[0.1] bg-dot-black/[0.1]" }),
      React.createElement(IconClipboard, { className: "absolute top-2 right-2 text-neutral-300 group-hover/btn:block hidden h-4 w-4 transition duration-200" }),
      React.createElement("div", { className: "relative z-40" }, children)
    )
  );
};

export { ButtonsCard };
