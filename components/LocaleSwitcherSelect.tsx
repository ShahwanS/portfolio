"use client";

import { ChangeEvent, ReactNode, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { Locale } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function onSelectChange(nextLocale: Locale) {
    startTransition(() => {
      const newPath = `/${nextLocale}`;
      router.replace(newPath);
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
          {defaultValue.toUpperCase()}
          <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === "option") {
            return (
              <DropdownMenuItem
                key={child.props.value}
                onSelect={() => onSelectChange(child.props.value as Locale)}
                disabled={isPending}
              >
                {child.props.children}
              </DropdownMenuItem>
            );
          }
          return null;
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
