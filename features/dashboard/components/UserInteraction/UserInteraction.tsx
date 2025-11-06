import type { UserInteractionResponse } from "~/features/dashboard/types/dashboard";
import { Card } from "~/shared/components";
import UserInteractionTable from "./UserInteractionTable";

interface UserInteractionProps {
  interactions: UserInteractionResponse[]
}

const UserInteraction = ({ interactions }: UserInteractionProps) => {
  return (
    <Card header="User Interaction" showTooltip>
      <UserInteractionTable interactions={interactions} />
    </Card>
  )
}

export default UserInteraction;
