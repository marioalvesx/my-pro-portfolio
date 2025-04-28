"use client";

import { Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useLanguage } from "@/context/LanguageContext";
import { writeOnLocalStorage } from "@/shared/local-storage";

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Languages />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => {
            toggleLanguage("pt-br");
            writeOnLocalStorage("language", "pt-br");
          }}
          disabled={language === "pt-br"}
        >
          Português
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            toggleLanguage("en-us");
            writeOnLocalStorage("language", "en-us");
          }}
          disabled={language === "en-us"}
        >
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
