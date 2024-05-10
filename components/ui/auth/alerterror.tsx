import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { GoCheckCircle } from "react-icons/go";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertEchec({description, message}:{description:string, message:string}) {
  return (
    <Alert variant="destructive">
      <ExclamationTriangleIcon className="h-4 w-4 bg bg " />
      <AlertTitle>{message}r</AlertTitle>
      <AlertDescription>
        {description}
      </AlertDescription>
    </Alert>
  )
}
