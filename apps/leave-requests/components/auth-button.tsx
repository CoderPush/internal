import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import { getUser } from "@workspace/supabase";
import { LogoutButton } from "./logout-button";

export async function AuthButton() {
  const user = await getUser();

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <LogoutButton />
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={"outline"}>
        <Link href="/auth/login">Sign in</Link>
      </Button>
    </div>
  );
}
