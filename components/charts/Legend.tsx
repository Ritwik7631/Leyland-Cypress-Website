"use client";
import { memo} from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { legend } from "./data";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
const Legend = ({
  handleFilterChange,
}: {
  handleFilterChange: (key: string, value: string) => void;
}) => {
  const searchParams = useSearchParams();
  let filterBits = searchParams.get("filter_bits") || "1".repeat(legend.length);

  
  return (
    <>
      {legend.map(({ id, label }, ind) => (
        <div key={id} className="flex items-center py-2 space-x-2">
          <Checkbox
            className={cn(
              " disabled:opacity-1",
              {
                "data-[state=checked]:bg-accent-primary":
                  id === "our-portfolio",
              },
              { "data-[state=checked]:bg-[gray]": id === "stock-market" },
              { "data-[state=checked]:bg-[skyblue]": id === "bonds" },
              { "data-[state=checked]:bg-[brown]": id === "commodities" },
              { "data-[state=checked]:bg-[gold]": id === "gold" }
            )}
            id={id}
            checked={ind === 0 ? true : filterBits[ind] === "1"}
            onClick={() => {
              const bits = filterBits.split("");
              bits[ind] = bits[ind] === "1" ? "0" : "1";
              handleFilterChange("filter_bits", bits.join(""));
            }}
            disabled={id === "our-portfolio"}
          />
          <Label
            htmlFor={id}
            className="font-medium leading-none peer-disabled:cursor-not-allowed hover:cursor-pointer peer-disabled:opacity-70"
          >
            {label}
          </Label>
        </div>
      ))}
    </>
  );
};

export default memo(Legend);
