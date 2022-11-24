import { getSession, useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import { GetServerSideProps } from 'next'

function Home() {

  const { user } = useUser()

  return (
    <div>
      <h1>Hello World</h1>

      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired({
  returnTo: '/api/auth/login'
})

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const session = getSession(ctx.req, ctx.res)

//   console.log(session?.accessToken)

//   return {
//     props: {}
//   }
// }

export default Home