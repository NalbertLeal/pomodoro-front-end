<script>
  export let inputType = 'text'
  export let label = ''
  export let onClick = (() => {})
</script>

<div class="form-group mb-3">
  <label for={label}>{label}:</label>
  <input on:change={(v) => onClick(v.target.value)} type={inputType} class="form-control" id={label} placeholder={label} name={label} />
</div>