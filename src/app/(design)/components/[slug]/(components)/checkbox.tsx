import { Checkbox } from "@/components/ui/checkbox";

export const checkbox = {
  name: "checkbox",
  title: "Checkbox",
  description: "Allows users to select multiple items from a list of options.",
  components: {
    Default: (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    ),
  },
};
