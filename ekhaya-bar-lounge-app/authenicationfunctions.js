import {supabase} from './supabaseclient'


async function HandleSignUp(){
    
    try{
        const { data, error } = await supabase.auth.signUp(
            {
              email: 'example@email.com',
              password: 'example-password',
              options: {
                data: {
                  first_name: 'name',
                  nickname:'df',
                  last_name: 'surname',
                  phone_number:'+27525',
                  role: ['one','two'],
                  image_url:'http;//',
                  LOA:'f',
                  status:'g',
                }
              }
            }
          )
        //200
        //user must confirm email

    }catch(error)
    {
        //error
        //restart

    }


}


async function HandleSignIn(){

    try{
        const { data, error } = await supabase.auth.signInWithPassword({
            email: 'example@email.com',
            password: 'example-password',
        })


    }catch(error)
    {
        //error
    }

}


async function HandleStartUp(){
    supabase.auth.onAuthStateChange((event, session) => {
        setTimeout(async () => {
          // await on other Supabase function here
          // this runs right after the callback has finished
          const { data } = supabase.auth.onAuthStateChange((event, session) => {
            console.log(event, session)
          
            if (event === 'INITIAL_SESSION') {
              // handle initial session-first
            } else if (event === 'SIGNED_IN') {
              // handle sign in event
            } else if (event === 'SIGNED_OUT') {
              // handle sign out event
            } else if (event === 'PASSWORD_RECOVERY') {
              // handle password recovery event
            } else if (event === 'TOKEN_REFRESHED') {
              // handle token refreshed event
            } else if (event === 'USER_UPDATED') {
              // handle user updated event
            }
          })
          
          // call unsubscribe to remove the callback
          data.subscription.unsubscribe()
          
        }, 0)
      })
}