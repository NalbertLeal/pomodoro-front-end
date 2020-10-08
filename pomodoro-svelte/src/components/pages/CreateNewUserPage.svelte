<script>
  import page, { redirect, start } from 'page';

  import { onDestroy } from 'svelte';

  import Button from '../basics/Button.svelte'
  import Input from '../basics/Input.svelte'

  function isAuthenticated() {
    const currentUser = localStorage.getItem('currentUser')
    if (currentUser && currentUser.length > 0) return true
    return false
  }

  function ifNotAuthenticatedGoToLogin() {
    if (!isAuthenticated()) page('/')
  }

  // ifNotAuthenticatedGoToLogin()
</script>

<style>

</style>

<section id="authentication-page">
  {this.isAuthenticated()}

  <Input label="Email" value={this.state.email} onChange={this.updateEmail} type="email" />
  <Input label="Password" value={this.state.password} onChange={this.updatePassword} type="password" />
  <Input label="Repeat password" value={this.state.repeatPassword} onChange={this.updateRepeatPassword} type="password" classValue="margin-4rem" />

  <Button label="Create new user" />
</section>