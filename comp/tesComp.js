import getMembers from "../lib/members"

const members = await getMembers()
console.log(members)
export default function Test(){
    return(
        <>{members?.map((member) => {
            return (
              <p key={member.email} className='mt-3'>
                {member.email}
              </p>
            )
          })}</>
    )
}