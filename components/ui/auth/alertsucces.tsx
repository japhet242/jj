import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { GoCheckCircle } from "react-icons/go";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertDestructive({description, message}:{description:string, message:string}) {
  return (
    <Alert variant="success">
      <GoCheckCircle className="h-4 w-4 bg bg " />
      <AlertTitle>{message}</AlertTitle>
      <AlertDescription>
        {description}
      </AlertDescription>
    </Alert>
  )
}
