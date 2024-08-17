import { TextField } from "@mui/material"

function Login (){
  return (
    <>
      <h1>Login</h1>
      <TextField id="email" label="Email" type="email" variant="outlined"></TextField>
    </>
  )
}

export default Login