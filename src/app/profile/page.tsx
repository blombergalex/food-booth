'use client'

import { useUserContext } from "@/utils/contexts"
import { UserContextType } from "@/utils/types"

const profile = () => {
  const { user } = useUserContext() as UserContextType;

  return (
    <>
      <h1>Profile Page</h1>
      {user ? (
        <div>
        <p>{user.name}'s saved recipes</p>
        {/* // show saved recipes: */}
        <p>Your favourite category:<span>{user.category}</span></p>
      </div>
      ) : <p>No user found</p>
    }
    </>
  )
}

export default profile