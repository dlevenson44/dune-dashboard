import type { UserInteractionResponse } from "~/features/dashboard/types/dashboard";
import { Card } from "~/shared/components";
import UserInteractionData from "./UserInteractionData";

interface UserInteractionProps {
  interactions: UserInteractionResponse[]
}

const UserInteraction = ({ interactions }: UserInteractionProps) => {
  return (
    <Card header="User Interaction" showTooltip>
      <UserInteractionData interactions={interactions} />
    </Card>
  )
}

export default UserInteraction;
