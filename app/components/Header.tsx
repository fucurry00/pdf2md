"use client";

import React from "react";
import type { Translations } from "../lib/i18n";

type HeaderProps = {
  currentStep?: "upload" | "analyze" | "result";
  isInitialUpload?: boolean;
  onReset?: () => void;
  translations: Translations;
};
export default function Header({
  isInitialUpload = false,
  onReset,
  translations,
}: HeaderProps) {
  return (
    <header
      className={`
        flex select-none
        ${isInitialUpload ? "justify-center" : "justify-between items-center"}
        md:py-6 md:px-6
        py-2 px-2
      `}
    >
      {!isInitialUpload && (
        <div className="flex-1">
          {onReset && (
            <button
              onClick={onReset}
              className="px-2 py-2 bg-white/20 hover:bg-gray-200 rounded-2xl text-sm transition-colors flex items-center gap-2"
              aria-label={translations.backButton}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              {translations.backButton}
            </button>
          )}
        </div>
      )}
      <h1 className={`md:text-2xl font-bold ${!isInitialUpload && "text-center"}` }>
        {translations.title}
      </h1>
      {!isInitialUpload && <div className="flex-1" />}
    </header>
  );
}
